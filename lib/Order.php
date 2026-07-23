<?php

namespace Contexis\Expose;

use Contexis\Expose\Integration\GutenbergFormAdapter;
use Contexis\Expose\ValueObject\OrderItem;
use Contexis\Expose\ValueObject\OrderMailData;
use Contexis\Expose\ValueObject\OrderRequest;

final class Order {

	private $gutenberg_form;

	public function __construct() {
		$this->gutenberg_form = new GutenbergFormAdapter();
		add_action( 'rest_api_init', array( $this, 'register_order_route' ) );
	}

	public function register_order_route(): void {
		register_rest_route(
			'expose/v2',
			'/order',
			[
				'methods' => 'POST',
				'callback' => [ $this, 'process_order' ],
				'permission_callback' => [ $this, 'get_permission' ],
			],
			false
		);
	}

	public function process_order( \WP_REST_Request $request ): \WP_REST_Response {
		$values = $request->get_json_params();
		$order_request = is_array( $values ) ? OrderRequest::fromPayload( $values ) : null;

		if ( ! $order_request instanceof OrderRequest ) {
			$response = new \WP_REST_Response( [ 'status' => 'error', 'data' => 'No products in cart' ] );
			$response->set_status( 400 );
			return $response;
		}

		$mail_data = $this->get_mail_data( $order_request );
		if ( ! $mail_data instanceof OrderMailData ) {
			$response = new \WP_REST_Response( [ 'status' => 'error', 'data' => __( 'The form data is incomplete or invalid.', 'expose' ) ] );
			$response->set_status( 400 );
			return $response;
		}

		$sent = $this->send_order_to_admin( $mail_data );
		$this->send_order_to_customer( $mail_data );
		$thank_you_page = $this->get_thank_you_page();

		$response = new \WP_REST_Response(
			[
				'status' => $sent ? 'ok' : 'error',
				'data' => $sent ? $thank_you_page : __( 'There has been a problem sending your Order. Please try again later', 'expose' ),
			]
		);

		$response->set_status( 200 );

		return $response;
	}

	public function send_order_to_admin( OrderMailData $data ): bool {
		$order_table = '<h2>' . __( 'New Order', 'expose' ) . '</h2>';
		$order_table .= '<h3>' . __( 'Customer', 'expose' ) . '</h3>';
		$order_table .= $data->customer_html;
		$order_table .= '<h3>' . __( 'Ordered Products', 'expose' ) . '</h3>';
		$order_table .= $data->products_html;

		$addresses = $this->get_admin_address();

		return wp_mail( $addresses, __( 'New Order', 'expose' ), $order_table, [ 'Content-Type: text/html; charset=UTF-8' ] );
	}

	private function send_order_to_customer( OrderMailData $data ): bool {
		$email = $this->resolve_customer_email( $data );
		if ( false === $email ) {
			return false;
		}

		$subject = sprintf(
			/* translators: %s: site name */
			__( 'Your order at %s', 'expose' ),
			wp_specialchars_decode( get_bloginfo( 'name' ), ENT_QUOTES )
		);

		$message = '<h2>' . __( 'Thank you for your order!', 'expose' ) . '</h2>';
		$message .= '<p>' . __( 'We have recieved your order and we will send it to you as soon as possible', 'expose' ) . '</p>';
		$message .= '<h3>' . __( 'Ordered Products', 'expose' ) . '</h3>';
		$message .= $data->products_html;

		return wp_mail( $email, $subject, $message, [ 'Content-Type: text/html; charset=UTF-8' ] );
	}

	private function get_admin_address(): string {
		$options = get_option( 'expose_options' );

		if ( empty( $options['admin_mail'] ?? null ) ) {
			return (string) get_option( 'admin_email' );
		}

		return (string) $options['admin_mail'];
	}

	/**
	 * @param OrderItem[] $items
	 */
	public function order_table( array $items ): string {
		$order_table = '<ul>';

		foreach ( $items as $item ) {
			$post = get_post( $item->product_id );

			if ( ! $post instanceof \WP_Post ) {
				continue;
			}

			$order_table .= "<li>{$item->quantity}x <a href='" . esc_url( $post->guid ) . "'>" . esc_html( $post->post_title ) . '</a></li>';
		}

		$order_table .= '</ul>';

		return $order_table;
	}

	public function get_mail_data( OrderRequest $order_request ) {
		$products_html = $this->order_table( $order_request->items );

		if ( $this->gutenberg_form->supports( $order_request ) ) {
			return $this->gutenberg_form->build_mail_data( $order_request, $products_html );
		}

		if ( ! $order_request->hasInternalRequiredFields() ) {
			return false;
		}

		$customer = '<ul>';
		$customer .= '<li><strong>' . __( 'Name', 'expose' ) . ':</strong> ' . esc_html( (string) $order_request->get( 'name', '' ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'E-Mail', 'expose' ) . ':</strong> ' . esc_html( (string) $order_request->get( 'email', '' ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'Address', 'expose' ) . ':</strong> ' . esc_html( (string) $order_request->get( 'address', '' ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'Zip', 'expose' ) . ':</strong> ' . esc_html( (string) $order_request->get( 'zip', '' ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'City', 'expose' ) . ':</strong> ' . esc_html( (string) $order_request->get( 'city', '' ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'Country', 'expose' ) . ':</strong> ' . esc_html( (string) $order_request->get( 'country', '' ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'Message', 'expose' ) . ':</strong> ' . nl2br( esc_html( (string) $order_request->get( 'message', '' ) ) ) . '</li>';
		$customer .= '<li><strong>' . __( 'Consent', 'expose' ) . ':</strong> ' . __( 'Yes', 'expose' ) . '</li>';
		$customer .= '</ul>';

		return new OrderMailData(
			$customer,
			$products_html,
			sanitize_email( (string) $order_request->get( 'email', '' ) ),
			$order_request->payload,
		);
	}

	private function get_thank_you_page(): string {
		$options = get_option( 'expose_options' );

		$thanks_head = esc_html( (string) ( $options['thanks_head'] ?? '' ) );
		$thanks_text = esc_html( (string) ( $options['thanks_text'] ?? '' ) );

		return "<h2>{$thanks_head}</h2><p>{$thanks_text}</p>";
	}

	private function resolve_customer_email( OrderMailData $data ) {
		$email = is_string( $data->customer_email ) ? sanitize_email( $data->customer_email ) : '';

		return '' !== $email ? $email : false;
	}

	// Let's add a nonce here later...
	public function get_permission( \WP_REST_Request $request ): bool {
		return true;
	}
}

<?php

namespace Contexis\Expose;

class Order {

	public static function init() {
		new self();
	}

	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_order_route' ) );
	}


	public function register_order_route(){
        register_rest_route( "expose/v2", "/order", ['methods' => 'POST', "callback" => [$this, "process_order"], "permission_callback" => [$this, "get_permission"]], false );
    }

    public function process_order($data) {
        
        $values = $data->get_json_params();
		
		if(!array_key_exists('products', $values)) {
			$response = new \WP_REST_Response( ["status" => 'error', 'data' => 'No products in cart'] );
			$response->set_status( 400 );
			return $response;
		}

		if(!array_key_exists('id', $values)) {
			$response = new \WP_REST_Response( ["status" => 'error', 'data' => 'No form id'] );
			$response->set_status( 400 );
			return $response;
		}

		if(!class_exists('\Contexis\GutenbergForm\FormFields')) {
			$response = new \WP_REST_Response( ["status" => 'error', 'data' => 'Gutenberg Forms not installed'] );
			$response->set_status( 400 );
			return $response;
		}

		$mail_data = $this->get_mail_data($values);
        
        // Add a custom status code
        $send = $this->send_order_to_admin($mail_data);
        //$send = $this->send_order_user($data);

		$thank_you_page = '<h2>' . get_option( 'expose_options' )['thanks_head'] . '</h2><p>' . get_option( 'expose_options' )['thanks_text'] . '</p>';
		
        $response = new \WP_REST_Response( ["status" => $send ? 'ok' : 'error', 'data' => $send ? $thank_you_page : __("There has been a problem sending your Order. Please try again later")] );

        $response->set_status( 200 );
        return $response;
    }


    public function send_order_to_admin($data) {
        $order_table = "<h2>" . __("New Order", "expose") . "</h2>";
        $order_table .= "<h3>" . __("Customer", "expose") . "</h3>";
        $order_table .= $data['customer'];
        $order_table .= "<h3>" .  __("Ordered Products", "expose") . "</h3>";
        $order_table .= $data['products'];
		
        $addresses = $this->get_admin_address();
        return wp_mail( $addresses, __("New Order", "expose"), $order_table, array('Content-Type: text/html; charset=UTF-8'));
    }

    private function get_admin_address() {
        $options = get_option( 'expose_options');

		if(empty($options['admin_mail'] ?? null)) {
			return get_option('admin_email');
		}
		
        return $options['admin_mail'];
    }

    public function send_order_user($data) {
        $options = get_option( 'expose_options');
        if(!array_key_exists('mail_subject', $options) && !array_key_exists('mail_content', $options)) {
            return  false;
        }
        
        $text = $options['mail_content'];
        $text = str_replace("#_FORENAME", $data['user']['forename']['value'], $text);
        $text = str_replace("#_SURNAME", $data['user']['surname']['value'], $text);
        $text = str_replace("#_EMAIL", $data['user']['email']['value'], $text);
        $text = str_replace("#_ADDRESS", $data['user']['address']['value'], $text);
        $text = str_replace("#_CITY", $data['user']['city']['value'], $text);
        $text = str_replace("#_ZIP", $data['user']['zip']['value'], $text);
        if(strpos($text, '#_ORDERLIST')) {
            $order_table = "<ul>";
            foreach($data['cart'] as $item) {
                $post = get_post( $item['id'] );
                $order_table .= "<li>" . $item['count'] . "x <a href='" . $post->guid . "'>" .  $post->post_title . "</a></li>";
            }
            $order_table .= "</ul>";
            $text = str_replace("#_ORDERLIST", $order_table, $text);
        }
        
        return wp_mail( $data['user']['email']['value'], $options['mail_subject'], $text, array('Content-Type: text/html; charset=UTF-8'));
    }

	public function order_table(Array $cart) {
		$order_table = "<ul>";
		foreach($cart as $id => $count ) {
			$post = get_post( $id );
			$order_table .= "<li>" . $count . "x <h href='" . $post->guid . "'>" .  $post->post_title . "</a></li>";
		}
		$order_table .= "</ul>";
		return $order_table;
	}

	public function get_mail_data($values) {
		if(!class_exists('\Contexis\GutenbergForm\FormFields') || !array_key_exists('id', $values)) {
			return false;
		}
		$formFields = new \Contexis\GutenbergForm\FormFields($values['id'], 0);
		$validation = $formFields->validate($values);
		$data = [
			'customer' => $formFields->get_formatted_values(),
			'products' => $this->order_table($values['products']),
			'raw' => $values,
		];
		return $data;
	}

    // Let's add a nonce here later...
    public function get_permission($data) {
        return true;
    }



}

Order::init();
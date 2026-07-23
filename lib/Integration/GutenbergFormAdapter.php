<?php

declare(strict_types=1);

namespace Contexis\Expose\Integration;

use Contexis\Expose\ValueObject\OrderMailData;
use Contexis\Expose\ValueObject\OrderRequest;
use Contexis\GutenbergForm\Email\VisitorEmailResolver;
use Contexis\GutenbergForm\Form\FormFields;

final class GutenbergFormAdapter
{
	private const MINIMUM_VERSION = '1.3.0';
	private const PLUGIN_FILE = WP_PLUGIN_DIR . '/gutenberg-form/gutenberg-form.php';

	public function is_available(): bool
	{
		return class_exists(FormFields::class) && version_compare($this->get_version(), self::MINIMUM_VERSION, '>=');
	}

	public function supports(OrderRequest $order_request): bool
	{
		return $this->is_available() && $order_request->isExternalFormSubmission();
	}

	public function build_mail_data(OrderRequest $order_request, string $products_html): OrderMailData
	{
		$form_fields = new FormFields($order_request->form_id ?? 0, 0);
		$form_fields->validate($order_request->payload);

		return new OrderMailData(
			$form_fields->get_formatted_values(),
			$products_html,
			$this->resolve_customer_email($form_fields),
			$order_request->payload,
		);
	}

	private function resolve_customer_email(FormFields $form_fields)
	{
		if (class_exists(VisitorEmailResolver::class)) {
			return (new VisitorEmailResolver())->resolve($form_fields);
		}

		$email = $form_fields->get_value('email');
		if (is_string($email) && $email !== '') {
			return $email;
		}

		$mail = $form_fields->get_value('mail');
		if (is_string($mail) && $mail !== '') {
			return $mail;
		}

		return false;
	}

	private function get_version(): string
	{
		if (!is_readable(self::PLUGIN_FILE)) {
			return '';
		}

		if (!function_exists('get_file_data')) {
			require_once ABSPATH . 'wp-includes/functions.php';
		}

		$plugin_data = get_file_data(
			self::PLUGIN_FILE,
			[
				'Version' => 'Version',
			]
		);

		return is_array($plugin_data) ? (string) ($plugin_data['Version'] ?? '') : '';
	}
}

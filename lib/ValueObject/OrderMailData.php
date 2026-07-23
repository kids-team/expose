<?php

declare(strict_types=1);

namespace Contexis\Expose\ValueObject;

final class OrderMailData
{
	/** @var string */
	public $customer_html;

	/** @var string */
	public $products_html;

	/** @var string|false */
	public $customer_email;

	/** @var array */
	public $raw_payload;

	public function __construct( string $customer_html, string $products_html, $customer_email, array $raw_payload ) {
		$this->customer_html = $customer_html;
		$this->products_html = $products_html;
		$this->customer_email = $customer_email;
		$this->raw_payload = $raw_payload;
	}
}

<?php

declare(strict_types=1);

namespace Contexis\Expose\ValueObject;

final class OrderItem
{
	/** @var int */
	public $product_id;

	/** @var int */
	public $quantity;

	public function __construct( int $product_id, int $quantity ) {
		$this->product_id = $product_id;
		$this->quantity   = $quantity;
	}

	public static function fromCartEntry( $product_id, $quantity ): ?self
	{
		$normalized_quantity = is_numeric($quantity) ? (int) $quantity : 0;
		if ($normalized_quantity <= 0) {
			return null;
		}

		return new self((int) $product_id, $normalized_quantity);
	}
}

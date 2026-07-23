<?php

declare(strict_types=1);

namespace Contexis\Expose\ValueObject;

final class OrderRequest
{
	private const REQUIRED_FIELDS = [ 'name', 'email', 'address', 'zip', 'city', 'country', 'message', 'consent' ];

	/** @var array */
	public $payload;

	/** @var OrderItem[] */
	public $items;

	/** @var int|null */
	public $form_id;

	/**
	 * @param OrderItem[] $items
	 */
	public function __construct( array $payload, array $items, ?int $form_id ) {
		$this->payload = $payload;
		$this->items   = $items;
		$this->form_id = $form_id;
	}

	public static function fromPayload(array $payload): ?self
	{
		$cart = $payload['products'] ?? null;
		if (!is_array($cart)) {
			return null;
		}

		$items = [];
		foreach ($cart as $product_id => $quantity) {
			$item = OrderItem::fromCartEntry($product_id, $quantity);
			if ($item instanceof OrderItem) {
				$items[] = $item;
			}
		}

		if ($items === []) {
			return null;
		}

		$form_id = array_key_exists('id', $payload) && is_numeric($payload['id']) ? (int) $payload['id'] : null;

		return new self($payload, $items, $form_id);
	}

	public function isExternalFormSubmission(): bool
	{
		return $this->form_id !== null;
	}

	public function hasInternalRequiredFields(): bool
	{
		foreach (self::REQUIRED_FIELDS as $field) {
			if (empty($this->payload[$field])) {
				return false;
			}
		}

		return true;
	}

	public function get(string $key, $default = null)
	{
		return $this->payload[$key] ?? $default;
	}
}

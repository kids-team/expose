<?php
/**
 * Plugin Name:     CTX Products
 * Description:     Wordpress Plugin that displays free products like magazines or tracts and let customers place orders without payment.
 * Version:         2.1.2
 * Author:          Thomas Gollenia
 * LastUpdated:     2026-06-16
 * Tested:          7.1
 * Requires PHP:    8.5
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     expose
 *
 * @package         ctx-products
 */

use Contexis\Expose\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$composer_autoload = __DIR__ . '/vendor/autoload.php';

require_once $composer_autoload;

register_activation_hook( __FILE__, [ Plugin::class, 'activate' ] );

( new Plugin( __FILE__ ) )->boot();

<?php
/**
 * Plugin Name:     CTX Products
 * Description:     Wordpress Plugin that displays free products like magazines or tracts and let customers place orders without payment.
 * Version:         0.0.1
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     ctx-products
 *
 * @package         create-block
 */

require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

$post_type = new Contexis\Products\Product();
$order = new Contexis\Products\Order();
$settings = new Contexis\Products\Settings();

// twice?
$assets = new Contexis\Products\Assets();


add_action( 'init', ['Contexis\\Products\\Assets', 'register_block_editor'] );
add_action( 'wp_enqueue_scripts', ['Contexis\\Products\\Assets', 'register_frontend'] );
$args = Contexis\Products\Assets::get_args();

// Add Twig functions
// @todo Check if needed
add_filter( 'timber/twig', ["Contexis\\Products\\TwigExtend", "add_to_twig"] );

$upcoming_block = new Contexis\Products\Blocks\ProductsShop($args);
$upcoming_block->register();



register_activation_hook(__FILE__, 'install');

function install() {
    add_option('ctx_product_options', ['slug'=>'products']);
}


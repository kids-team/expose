<?php
/**
 * Plugin Name:     Expose
 * Description:     Wordpress Plugin that displays free products like magazines or tracts and let customers place orders without payment.
 * Version:         1.0.1
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     expose
 *
 * @package         create-products
 */



require_once('lib/Assets.php');
require_once('lib/Update.php');
require_once('lib/Order.php');
require_once('lib/Product.php');
require_once('lib/Settings.php');
require_once('lib/Blocks/Block.php');
require_once('lib/Blocks/ProductsShop.php');

add_action( 'init', 'ctxproducts_load_textdomain', 1 );

/**
 * Load plugin textdomain.
 */
function ctxproducts_load_textdomain() {
    load_plugin_textdomain( 'expose', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
}
  

$post_type = new Contexis\Expose\Product();
$order = new Contexis\Expose\Order();
$settings = new Contexis\Expose\Settings();

\Contexis\Expose\Update::init();


$assets = new Contexis\Expose\Assets();

add_action( 'init', ['Contexis\\Expose\\Assets', 'register_block_editor'] );

add_action( 'wp_enqueue_scripts', ['Contexis\\Expose\\Assets', 'register_frontend'] );
$args = Contexis\Expose\Assets::get_args();

// Add Twig functions
// @todo Check if needed


$upcoming_block = new Contexis\Expose\Blocks\ProductsShop($args);
$upcoming_block->register();

register_activation_hook(__FILE__, 'install');

function install() {
    add_option('expose_options', [
        'slug'=>'products',
        'mail_subject'=>__("Your Order", "expose"),
        'mail_content'=>__("Dear #_FORENAME,\n\nThank you for your order. We will send you the following products:\n\n#_PRODUCTLIST\n\nBlessings, your Shop", "expose"),
        'thanks_head'=>__("Thank you for your order!", "expose"),
        'thanks_text'=>__("We have recieved your order and we will send it to you as soon as possible", "expose"),
        'consent'=>__("I consent to all <a href='https://bestlifeonline.com/47-weird-laws-around-world/'>law stuff</a> and allow you to process my data for this very order. All my data will be deleted after shipping.", "expose"),
    ]);
}




  


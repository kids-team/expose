<?php
/**
 * Plugin Name:     CTX Products
 * Description:     Wordpress Plugin that displays free products like magazines or tracts and let customers place orders without payment.
 * Version:         1.0.2
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     expose
 *
 * @package         create-products
 */


require_once('lib/Order.php');
require_once('lib/Product.php');
require_once('lib/Settings.php');
require_once('lib/Update.php');	


/**
 * Load plugin textdomain.
 */
function ctx_products_load_textdomain() {
    load_plugin_textdomain( 'expose', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
}

add_action( 'init', 'ctx_products_load_textdomain', 1 );

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

register_activation_hook(__FILE__, 'install');

function ctx_products_register_block_editor() {
	$dir = __DIR__;
	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) return;
	
	$script_asset = require( $script_asset_path );
	
	wp_register_script(
			'expose-block-editor',
			plugins_url( '/build/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
	);
	wp_set_script_translations( 'expose-block-editor', 'expose', plugin_dir_path( __FILE__ ) . '/languages' );
	
	wp_enqueue_style(
				'expose-block-editor',
				plugins_url( '/build/index.css', __FILE__ ),
				[],
				$script_asset['version']
	);

	$blocks = [
		'shop',
		'cart'
	];
	
	foreach($blocks as $block) {
		register_block_type( __DIR__ . '/build/blocks/'.$block );
	}         
}

 function ctx_products_register_frontend() {

	$dir = __DIR__;

	$script_asset_path = "$dir/build/shop.asset.php";
	if ( ! file_exists( $script_asset_path ) ) return;
	
	$script_asset = require( $script_asset_path );
	
	wp_register_script(
		'expose-frontend',
		plugins_url( '/build/shop.js', __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
	

	wp_register_style(
		'expose-frontend-style',
		plugins_url( '/build/style-shop.css', __FILE__ ),
		[],
		$script_asset['version']
	);

	
}

function ctx_expose_frontend_translation() {
	wp_set_script_translations( 'expose-frontend', 'expose', plugin_dir_path( __FILE__ ) . '/languages' );
}

add_action( 'init', 'ctx_products_register_block_editor' );
add_action( 'init', 'ctx_products_register_frontend' );
add_action( 'wp_enqueue_scripts', 'ctx_expose_frontend_translation' );

  

new \Contexis\Expose\Update(
	__FILE__,
	'gollenia',
	'expose'
);
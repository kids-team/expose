<?php
/**
 * Plugin Name:     CTX Products
 * Description:     Wordpress Plugin that displays free products like magazines or tracts and let customers place orders without payment.
 * Version:         1.0.1
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     expose
 *
 * @package         create-products
 */

require_once('lib/assets.php');
require_once('lib/block.php');
require_once('lib/Order.php');
require_once('lib/Product.php');
require_once('lib/Settings.php');


/**
 * Load plugin textdomain.
 */
function ctxproducts_load_textdomain() {
    load_plugin_textdomain( 'expose', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
}

add_action( 'init', 'ctxproducts_load_textdomain', 1 );

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



  


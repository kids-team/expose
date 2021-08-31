<?php
namespace Contexis\Products;

class Assets {

    public static function register_block_editor() {
            $dir = __DIR__;
            $script_asset_path = "$dir/../build/index.asset.php";
            if ( ! file_exists( $script_asset_path ) ) {
                  throw new \Error(
                          'You need to run `npm start` or `npm run build` for the "ctx/ctx-blocks" block first.'
                 );
            }
            $index_js     = '../build/index.js';
            $script_asset = require( $script_asset_path );
            wp_register_script(
                  'ctx-products-block-editor',
                  plugins_url( $index_js, __FILE__ ),
                  $script_asset['dependencies'],
                  $script_asset['version']
            );
            wp_set_script_translations( 'ctx-products-block-editor', 'ctx-blocks', plugin_dir_path( __FILE__ ) . '../languages' );
            
            $editor_css = '../build/index.css';

            wp_register_style(
                     'ctx-products-block-editor',
                     plugins_url( $editor_css, __FILE__ ),
                     array(),
                     filemtime( "$dir/$editor_css" )
            );
    
             $style_css = '../build/style-index.css';
             wp_register_style(
                     'ctx-products-block-style',
                     plugins_url( $style_css, __FILE__ ),
                     array(),
                     filemtime( "$dir/$style_css" )
             );       
    }

    public static function register_frontend() {
        $options = get_option( 'ctx_product_options');
       
        wp_enqueue_script( 'ctx_products_vendor_script', plugin_dir_url( __FILE__ ) . '../web/dist/js/chunk-vendors.js', array(), false, true  );
        wp_enqueue_script( 'ctx_products_shop_script', plugin_dir_url( __FILE__ ) . '../web/dist/js/app.js',array(), false, true  );
        wp_localize_script( 'ctx_products_shop_script', 'ctx_products_vuejs', array(
            'root' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'strings' => [
                "order" => __("Order", "ctx-products"),
                "cancel" => __("Cancel", "ctx-products"),
                "back" => __("Back", "ctx-products"),
                "back" => __("Close", "ctx-products"),
                "proceed" => __("Proceed", "ctx-products"),
                "forename" => __("Forename", "ctx-products"),
                "surname" => __("Surname", "ctx-products"),
                "address" => __("Address", "ctx-products"),
                "email" => __("Email", "ctx-products"),
                "zip" => __("ZIP", "ctx-products"),
                "phone" => __("Phone", "ctx-products"),
                "city" => __("City", "ctx-products"),
                "comment" => __("Comment", "ctx-products"),
                "processing" => __("Processing", "ctx-products"),
                "cart" => __("Shopping cart", "ctx-products"),
                "wait" => __("Please wait...", "ctx-products"),
                "all" => __("All", "ctx-products"),
                "consent" => array_key_exists('consent', $options) ? $options['consent'] : '',
                "thanksHead" => array_key_exists('thanks_head', $options) ? $options['thanks_head'] : 'no head',
                "thanksText" => array_key_exists('thanks_text', $options) ? $options['thanks_text'] : 'no msg',
            ]
        ) );
    }

    public static function get_args() {
        return [
            'style'         => 'ctx-products-block-style',
            'editor_script' => 'ctx-products-block-editor',
            'editor_style'  => 'ctx-products-block-editor',
        ];
    }
}
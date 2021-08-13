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
        wp_enqueue_script( 'ctx_products_vendor_script', plugin_dir_url( __FILE__ ) . '../frontend/dist/js/chunk-vendors.js', array(), false, true  );
        wp_enqueue_script( 'ctx_products_shop_script', plugin_dir_url( __FILE__ ) . '../frontend/dist/js/app.js',array(), false, true  );
        wp_localize_script( 'ctx_products_shop_script', 'wpApiSettings', array(
            'root' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' )
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
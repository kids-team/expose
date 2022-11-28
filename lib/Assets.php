<?php
namespace Contexis\Expose;

class Assets {

    public static function register_block_editor() {
            $dir = __DIR__;
            $script_asset_path = "$dir/../build/index.asset.php";
            if ( ! file_exists( $script_asset_path ) ) {
                  throw new \Error(
                          'You need to run `npm start` or `npm run build` for the "ctx/expose" block first.'
                 );
            }
            $index_js     = '../build/index.js';
            $script_asset = require( $script_asset_path );
            wp_register_script(
                  'expose-block-editor',
                  plugins_url( $index_js, __FILE__ ),
                  $script_asset['dependencies'],
                  $script_asset['version']
            );
            wp_set_script_translations( 'expose-block-editor', 'expose', plugin_dir_path( __FILE__ ) . '../languages' );
            
            $editor_css = '../build/index.css';

            wp_register_style(
                     'expose-block-editor',
                     plugins_url( $editor_css, __FILE__ ),
                     array(),
                     filemtime( "$dir/$editor_css" )
            );
    
             $style_css = '../build/style-index.css';
             wp_register_style(
                     'expose-block-style',
                     plugins_url( $style_css, __FILE__ ),
                     array(),
                     filemtime( "$dir/$style_css" )
             );       
    }

    public static function register_frontend() {
        $options = get_option( 'expose_options');
       
        wp_enqueue_script( 'expose_vendor_script', plugin_dir_url( __FILE__ ) . '../web/dist/js/chunk-vendors.js', array(), false, true  );
        wp_enqueue_script( 'expose_shop_script', plugin_dir_url( __FILE__ ) . '../web/dist/js/app.js',array(), false, true  );
        wp_localize_script( 'expose_shop_script', 'expose_vuejs', array(
            'root' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'strings' => [
                "order" => __("Order", "expose"),
                "cancel" => __("Cancel", "expose"),
                "back" => __("Back", "expose"),
                "proceed" => __("Proceed", "expose"),
                "forename" => __("Forename", "expose"),
                "surname" => __("Surname", "expose"),
                "address" => __("Address", "expose"),
                "email" => __("Email", "expose"),
                "zip" => __("ZIP", "expose"),
                "next" => __("Next", "expose"),
                "phone" => __("Phone", "expose"),
                "city" => __("City", "expose"),
                "comment" => __("Comment", "expose"),
                "processing" => __("Processing", "expose"),
                "cart" => __("Shopping cart", "expose"),
                "wait" => __("Please wait...", "expose"),
                "all" => __("All", "expose"),
                "consent" => array_key_exists('consent', $options) ? $options['consent'] : '',
                "thanksHead" => array_key_exists('thanks_head', $options) ? $options['thanks_head'] : 'no head',
                "thanksText" => array_key_exists('thanks_text', $options) ? $options['thanks_text'] : 'no msg',
            ]
        ) );
    }

    public static function get_args() {
        return [
            'style'         => 'expose-block-style',
            'editor_script' => 'expose-block-editor',
            'editor_style'  => 'expose-block-editor',
        ];
    }
}
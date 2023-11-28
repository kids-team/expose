<?php

function ctx_products_register_block_editor() {
            $dir = __DIR__;
            $script_asset_path = "$dir/../build/index.asset.php";
            if ( ! file_exists( $script_asset_path ) ) return;
            
            $script_asset = require( $script_asset_path );
			
            wp_enqueue_script(
                  'expose-block-editor',
                  plugins_url( '../build/index.js', __FILE__ ),
                  $script_asset['dependencies'],
                  $script_asset['version']
            );
            wp_set_script_translations( 'expose-block-editor', 'expose', plugin_dir_path( __FILE__ ) . '../languages' );
            
            wp_enqueue_style(
                     'expose-block-editor',
                     plugins_url( '../build/index.css', __FILE__ ),
                     [],
                     $script_asset['version']
            );
    
                 
    }

 function ctx_products_register_frontend() {
	$options = get_option( 'expose_options');

	$dir = __DIR__;

	$script_asset_path = "$dir/../build/frontend.asset.php";
	if ( ! file_exists( $script_asset_path ) ) return;
	
	$script_asset = require( $script_asset_path );
	
	wp_register_script(
		'expose-frontend',
		plugins_url( '../build/shop.js', __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'expose-block-editor', 'expose', plugin_dir_path( __FILE__ ) . '../languages' );

	wp_register_style(
		'expose-frontend-style',
		plugins_url( '../build/style-shop.css', __FILE__ ),
		[],
		$script_asset['version']
	);
}

add_action( 'admin_enqueue_scripts', 'ctx_products_register_block_editor' );
add_action( 'init', 'ctx_products_register_frontend' );
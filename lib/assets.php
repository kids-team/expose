<?php

function ctx_products_register_block_editor() {
	$dir = __DIR__;
	$script_asset_path = "$dir/../build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) return;
	
	$script_asset = require( $script_asset_path );
	
	wp_register_script(
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

	$blocks = [
		'shop',
		'cart'
	];
	
	foreach($blocks as $block) {
		register_block_type( __DIR__ . '/../build/blocks/'.$block );
	}         
}

 function ctx_products_register_frontend() {

	$dir = __DIR__;

	$script_asset_path = "$dir/../build/shop.asset.php";
	if ( ! file_exists( $script_asset_path ) ) return;
	
	$script_asset = require( $script_asset_path );
	
	wp_register_script(
		'expose-frontend',
		plugins_url( '../build/shop.js', __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
	

	wp_register_style(
		'expose-frontend-style',
		plugins_url( '../build/style-shop.css', __FILE__ ),
		[],
		$script_asset['version']
	);

	
}

function ctx_add_frontend_translation() {
	wp_set_script_translations( 'expose-frontend', 'expose', plugin_dir_path( __FILE__ ) . '../languages' );
}

add_action( 'init', 'ctx_products_register_block_editor' );
add_action( 'init', 'ctx_products_register_frontend' );
add_action( 'wp_enqueue_scripts', 'ctx_add_frontend_translation' );
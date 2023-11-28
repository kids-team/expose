<?php

function ctx_products_register_blocks() {	
	
	register_block_type( __DIR__ . '/../build/blocks/shop' );
}

add_action( 'init', 'ctx_products_register_blocks' );
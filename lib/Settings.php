<?php

namespace Contexis\Products;

class Settings {

    public $plugin_name = "ctx-products";
	/*
	 * Constructor - the brain of our class
	 * */
	public function __construct() {
		add_action('admin_menu', array( $this, 'add_settings_menu' ), 9);    
		add_action( 'admin_init', [&$this,'register_settings'] );
	}

	public function add_settings_menu(){
        add_submenu_page( 
			'edit.php?post_type=ctx-products', 			// URL Location
			'Plugin Name Settings', 				 	// Name
			'Settings', 								// Title
			'administrator', 							// Access Level
			'ctx-products-settings', 					// Page Name
			[$this, 'display_admin_settings']			// Callback
		);
	}

	public function display_admin_settings() {
		?>
		<div class="wrap">
		        <div id="icon-themes" class="icon32"></div>  
		        <h2>Plugin Name Settings</h2>  
		         <!--NEED THE settings_errors below so that the errors/success messages are shown after submission - wasn't working once we started using add_menu_page and stopped using add_options_page so needed this-->
				<?php settings_errors(); ?>  
		        <form method="POST" action="options.php">  
		            <?php 
		                settings_fields( 'ctx_product_options' );
		                do_settings_sections( 'ctx-products-settings' ); 
		            ?>             
		            <?php submit_button(); ?>  
		        </form> 
		</div>
		<?php
	}

	function register_settings() {
		register_setting( 'ctx_product_options', 'ctx_product_options' );
		add_settings_section( 'general_settings', 'General Settings', [$this,'section_text'], 'ctx-products-settings' );
		add_settings_field( 'ctx_products_setting_slug', 'Slug', [$this,'ctx_products_setting_slug'], 'ctx-products-settings', 'general_settings' );
	}

	function section_text() {
		echo "hihi";
	}

	function ctx_product_options_validate( $input ) {
		$newinput['slug'] = trim( $input['slug'] );
		if ( ! preg_match( '/^[a-z0-9]{32}$/i', $newinput['slug'] ) ) {
			$newinput['slug'] = '';
		}
	
		return $newinput;
	}

	function ctx_products_setting_slug() {
		$options = get_option( 'ctx_product_options' );
		var_dump($options);
		echo "<input id='ctx_products_setting_slug' name='ctx_product_options[slug]' type='text' value='" . esc_attr( $options ? $options['slug'] : "" ) . "' />";
	}

}
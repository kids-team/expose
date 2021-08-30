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
			__('Product Shop Settings', 'ctx-products'),	// Name
			__('Settings', 'ctx-products'), 								// Title
			'administrator', 							// Access Level
			'ctx-products-settings', 					// Page Name
			[$this, 'display_admin_settings']			// Callback
		);
	}

	public function display_admin_settings() {
		?>
		<div class="wrap">
		        <div id="icon-themes" class="icon32"></div>  
		        <h2><?php echo __("Product Shop Settings", 'ctx-products') ?></h2>  
				<?php settings_errors(); ?>  
		        <form method="POST" action="options.php">  
		            <?php 
		                settings_fields( 'ctx_product_options' );
		                do_settings_sections( 'ctx-products-settings' ); 
                        submit_button();
		            ?>             
		        </form> 
		</div>
		<?php
	}

	function register_settings() {
		register_setting( 'ctx_product_options', 'ctx_product_options' );
		add_settings_section( 'general_settings', 'General Settings', [$this,'section_text'], 'ctx-products-settings' );
		add_settings_field( 'ctx_products_setting_slug', __('Slug', 'ctx-products'), [$this,'ctx_products_setting_slug'], 'ctx-products-settings', 'general_settings' );
        add_settings_field( 'ctx_products_setting_consent', __('Consent Text', 'ctx-products'), [$this,'ctx_products_setting_consent'], 'ctx-products-settings', 'general_settings' );
        add_settings_field( 'ctx_products_setting_mail_subject', __('Mail Subject', 'ctx-products'), [$this,'ctx_products_setting_mail_subject'], 'ctx-products-settings', 'general_settings' );
        add_settings_field( 'ctx_products_setting_mail_content', __('Mail Content', 'ctx-products'), [$this,'ctx_products_setting_mail_content'], 'ctx-products-settings', 'general_settings' );
        add_settings_field( 'ctx_products_setting_thanks_head', __('Confirmation page title', 'ctx-products'), [$this,'ctx_products_setting_thanks_head'], 'ctx-products-settings', 'general_settings' );
        add_settings_field( 'ctx_products_setting_thanks_text', __('Confirmation page text', 'ctx-products'), [$this,'ctx_products_setting_thanks_text'], 'ctx-products-settings', 'general_settings' );
        add_settings_field( 'ctx_products_setting_admin_mail', __('Admin Mail', 'ctx-products'), [$this,'ctx_products_setting_admin_mail'], 'ctx-products-settings', 'general_settings' );
	}

	function section_text() {

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
		echo "<input id='ctx_products_setting_slug' name='ctx_product_options[slug]' type='text' value='" . esc_attr( array_key_exists('slug', $options) ? $options['slug'] : "" ) . "' />";
	}

    function ctx_products_setting_mail_subject() {
		$options = get_option( 'ctx_product_options' );
		echo "<input style='width: 100%;' id='ctx_products_setting_mail_subject' name='ctx_product_options[mail_subject]' type='text' value='" . esc_attr( array_key_exists('mail_subject', $options) ? $options['mail_subject'] : "" ) . "' />";
        echo "<p class='description' id='mail_subject-description'>" . __("Subject for the mail sent to the user", "ctx-products") . "</p>";
	}

    function ctx_products_setting_mail_content() {
		$options = get_option( 'ctx_product_options' );
		echo "<textarea rows='10' style='width: 100%;' id='ctx_products_setting_mail_content' name='ctx_product_options[mail_content]' />" . esc_attr( array_key_exists('mail_content', $options) ? $options['mail_content'] : "" ) . "</textarea>";
        echo "<p class='description' id='mail_subject-description'>" . __("Mail sent to the user. Use placeholders like #_FORENAME, #_SURNAME or #_ORDERLIST.", "ctx-products") . "</p>";
	}

    function ctx_products_setting_thanks_head() {
		$options = get_option( 'ctx_product_options' );
		echo "<input style='width: 100%;' id='ctx_products_setting_thanks_head' name='ctx_product_options[thanks_head]' type='text' value='" . esc_attr( array_key_exists('thanks_head', $options) ? $options['thanks_head'] : "" ) . "' />";
        echo "<p class='description' id='mail_subject-description'>" . __("Title of confirmation page when order was successfull", "ctx-products") . "</p>";
	}

    function ctx_products_setting_thanks_text() {
		$options = get_option( 'ctx_product_options' );
		echo "<textarea rows='3' style='width: 100%;' id='ctx_products_setting_thanks_text' name='ctx_product_options[thanks_text]' />" . esc_attr( array_key_exists('thanks_text', $options) ? $options['thanks_text'] : "" ) . "</textarea>";
        echo "<p class='description' id='mail_subject-description'>" . __("Text of confirmation page when order was successfull", "ctx-products") . "</p>";
	}

    function ctx_products_setting_consent() {
		$options = get_option( 'ctx_product_options' );
		echo "<textarea rows='3' style='width: 100%;' id='ctx_products_setting_consent' name='ctx_product_options[consent]' />" . esc_attr( array_key_exists('consent', $options) ? $options['consent'] : "" ) . "</textarea>";
        echo "<p class='description' id='mail_subject-description'>" . __("Text for consent-box", "ctx-products") . "</p>";
	}

    function ctx_products_setting_admin_mail() {
		$options = get_option( 'ctx_product_options' );
		echo "<input style='width: 100%;' id='ctx_products_setting_admin_mail' name='ctx_product_options[admin_mail]' type='text' value='" . esc_attr( array_key_exists('admin_mail', $options) ? $options['admin_mail'] : "" ) . "' />";
        echo "<p class='description' id='tagline-description'>" . __("If empty, site admin will be used. Separate with commas.", "ctx-products") . "</p>";
	}

}
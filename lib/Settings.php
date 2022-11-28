<?php

namespace Contexis\Expose;

class Settings {

    public $plugin_name = "expose";

	public function __construct() {
		add_action('admin_menu', array( $this, 'add_settings_menu' ), 9);    
		add_action( 'admin_init', [&$this,'register_settings'] );
	}

	public function add_settings_menu(){
        add_submenu_page( 
			'edit.php?post_type=ctx-products', 			
			__('Product Shop Settings', 'expose'),	
			__('Settings', 'expose'), 								
			'administrator', 	
			'expose-settings', 			
			[$this, 'display_admin_settings']
		);
	}

	public function display_admin_settings() {
		?>
		<div class="wrap">
		        <div id="icon-themes" class="icon32"></div>  
		        <h2><?php echo __("Product Shop Settings", 'expose') ?></h2>  
				<?php settings_errors(); ?>  
		        <form method="POST" action="options.php">  
		            <?php 
		                settings_fields( 'expose_options' );
		                do_settings_sections( 'expose-settings' ); 
                        submit_button();
		            ?>             
		        </form> 
		</div>
		<?php
	}

	function register_settings() {
		register_setting( 'expose_options', 'expose_options' );
		add_settings_section( 'general_settings', 'General Settings', [$this,'section_text'], 'expose-settings' );
		add_settings_field( 'expose_setting_slug', __('Slug', 'expose'), [$this,'expose_setting_slug'], 'expose-settings', 'general_settings' );
        add_settings_field( 'expose_setting_consent', __('Consent Text', 'expose'), [$this,'expose_setting_consent'], 'expose-settings', 'general_settings' );
        add_settings_field( 'expose_setting_mail_subject', __('Mail Subject', 'expose'), [$this,'expose_setting_mail_subject'], 'expose-settings', 'general_settings' );
        add_settings_field( 'expose_setting_mail_content', __('Mail Content', 'expose'), [$this,'expose_setting_mail_content'], 'expose-settings', 'general_settings' );
        add_settings_field( 'expose_setting_thanks_head', __('Confirmation page title', 'expose'), [$this,'expose_setting_thanks_head'], 'expose-settings', 'general_settings' );
        add_settings_field( 'expose_setting_thanks_text', __('Confirmation page text', 'expose'), [$this,'expose_setting_thanks_text'], 'expose-settings', 'general_settings' );
        add_settings_field( 'expose_setting_admin_mail', __('Admin Mail', 'expose'), [$this,'expose_setting_admin_mail'], 'expose-settings', 'general_settings' );
	}

	function section_text() {

	}

	function expose_options_validate( $input ) {
		$newinput['slug'] = trim( $input['slug'] );
		if ( ! preg_match( '/^[a-z0-9]{32}$/i', $newinput['slug'] ) ) {
			$newinput['slug'] = '';
		}
	
		return $newinput;
	}

	function expose_setting_slug() {
		$options = get_option( 'expose_options' );
		echo "<input id='expose_setting_slug' name='expose_options[slug]' type='text' value='" . esc_attr( array_key_exists('slug', $options) ? $options['slug'] : "" ) . "' />";
	}

    function expose_setting_mail_subject() {
		$options = get_option( 'expose_options' );
		echo "<input style='width: 100%;' id='expose_setting_mail_subject' name='expose_options[mail_subject]' type='text' value='" . esc_attr( array_key_exists('mail_subject', $options) ? $options['mail_subject'] : "" ) . "' />";
        echo "<p class='description' id='mail_subject-description'>" . __("Subject for the mail sent to the user", "expose") . "</p>";
	}

    function expose_setting_mail_content() {
		$options = get_option( 'expose_options' );
		echo "<textarea rows='10' style='width: 100%;' id='expose_setting_mail_content' name='expose_options[mail_content]' />" . esc_attr( array_key_exists('mail_content', $options) ? $options['mail_content'] : "" ) . "</textarea>";
        echo "<p class='description' id='mail_subject-description'>" . __("Mail sent to the user. Use placeholders like #_FORENAME, #_SURNAME or #_ORDERLIST.", "expose") . "</p>";
	}

    function expose_setting_thanks_head() {
		$options = get_option( 'expose_options' );
		echo "<input style='width: 100%;' id='expose_setting_thanks_head' name='expose_options[thanks_head]' type='text' value='" . esc_attr( array_key_exists('thanks_head', $options) ? $options['thanks_head'] : "" ) . "' />";
        echo "<p class='description' id='mail_subject-description'>" . __("Title of confirmation page when order was successfull", "expose") . "</p>";
	}

    function expose_setting_thanks_text() {
		$options = get_option( 'expose_options' );
		echo "<textarea rows='3' style='width: 100%;' id='expose_setting_thanks_text' name='expose_options[thanks_text]' />" . esc_attr( array_key_exists('thanks_text', $options) ? $options['thanks_text'] : "" ) . "</textarea>";
        echo "<p class='description' id='mail_subject-description'>" . __("Text of confirmation page when order was successfull", "expose") . "</p>";
	}

    function expose_setting_consent() {
		$options = get_option( 'expose_options' );
		echo "<textarea rows='3' style='width: 100%;' id='expose_setting_consent' name='expose_options[consent]' />" . esc_attr( array_key_exists('consent', $options) ? $options['consent'] : "" ) . "</textarea>";
        echo "<p class='description' id='mail_subject-description'>" . __("Text for consent-box", "expose") . "</p>";
	}

    function expose_setting_admin_mail() {
		$options = get_option( 'expose_options' );
		echo "<input style='width: 100%;' id='expose_setting_admin_mail' name='expose_options[admin_mail]' type='text' value='" . esc_attr( array_key_exists('admin_mail', $options) ? $options['admin_mail'] : "" ) . "' />";
        echo "<p class='description' id='tagline-description'>" . __("If empty, site admin will be used. Separate with commas.", "expose") . "</p>";
	}

}
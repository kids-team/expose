<?php

class Form {

	var $form = [
			[
				"type" => "text",
				"name" => "name",
				"label" => __("Name", "expose"),
				"required" => true,
				"width"	=> 6,
				"placeholder" => "Name"
			],
			[
				"type" => "email",
				"name" => "email",
				"label" => __("E-Mail", "expose"),
				"required" => true,
				"width"	=> 6,
				"placeholder" => "E-Mail"
			],
			[
				"type" => "text",
				"name" => "address",
				"label" => __("Address", "expose"),
				"required" => true,
				"width"	=> 6,
				"placeholder" => "Message"
			],
			[
				"type" => "text",
				"name" => "zip",
				"label" => __("Zip", "expose"),
				"required" => true,
				"width"	=> 3,
				"placeholder" => "Zip"
			],
			[
				"type" => "text",
				"name" => "city",
				"label" => __("City", "expose"),
				"required" => true,
				"width"	=> 3,
				"placeholder" => "City"
			],
			[
				"type" => "text",
				"name" => "country",
				"label" => __("Country", "expose"),
				"required" => true,
				"width"	=> 6,
				"placeholder" => "Country"
			],
			[
				"type" => "textarea",
				"name" => "message",
				"label" => __("Message", "expose"),
				"required" => true,
				"width"	=> 6,
				"placeholder" => "Message"
			],
			[
				"type" => "checkbox",
				"name" => "consent",
				"label" => __("Consent", "expose"),
				"required" => true,
				"width"	=> 6,
				"placeholder" => "",
				"help" => get_option('expose_consent_text')

			],
			[
				"type" => "submit",
				"name" => "submit",
				"label" => __("Submit", "expose"),
				"required" => true,
				"placeholder" => "Submit"
			]
		
	];
	
	public static function init() {
		new self();
	}

	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_order_route' ) );
	}

	public function get_default_form() {
		return json_encode($this->form);
	}

	public function register_order_route() {
		register_rest_route( 'expose/v2', '/form', array(
			'methods' => 'GET',
			'callback' => array( $this, 'get_default_form' ),
			'permission_callback' => array( $this, 'get_permission' ),
		) );
	}
}
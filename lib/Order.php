<?php

namespace Contexis\Products;

class Order {

	/*
	 * Constructor - the brain of our class
	 * */ 
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_order_route' ) );
	}


	public function register_order_route(){
        register_rest_route( "ctx-products/v2", "/order", ['methods' => 'POST', "callback" => [$this, "process_order"], "permission_callback" => [$this, "get_permission"]], false );
    }

    public function process_order($data) {
        // Create the response object
        $values = $data->get_json_params();
        
        $invalid = $this->validate_input($values);
        if($invalid) {
            $response = new \WP_REST_Response( ["status" => 'invalid', 'data' => $invalid]);
            $response->set_status( 303 );
            return $response;
        };
        // Add a custom status code
        $send = $this->send_order_admin($data);
        $send = $this->send_order_user($data);
        $response = new \WP_REST_Response( ["status" => 'ok', 'data' => $send] );

        $response->set_status( 201 );
        return $response;
    }

    public function validate_input($data) {
        $valid = true;
        $input = $data['user'];
        $rexSafety = "/[\^<,\"@\/\{\}\(\)\*\$%\?=>:\|;#]+/i";

        foreach ($input as $key => $value) {
            switch ($key) {
                case "zip":
                    if(!is_numeric($value['value'])) {
                        $input['zip']['msg'] = __("ZIP code must be a number", "ctx-products");
                        $input['zip']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "email":
                    if(!filter_var($value['value'], FILTER_VALIDATE_EMAIL) || empty($value['value'])) { 
                        $input['email']['error'] = filter_var($value['value'], FILTER_VALIDATE_EMAIL) . __("Please give us a valid email address", "ctx-products");
                        $valid = false;
                    }
                    break;
                case "forename":
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['forename']['msg'] = __("Your forename is missing", "ctx-products") . $value['value'];
                        $input['forename']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "surname":
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['surname']['msg'] = __("Your surname is missing", "ctx-products") . $value['value'];
                        $input['surname']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "title":
                    
                    if (preg_match($rexSafety, $value['value'])) {
                        $input['title']['msg'] = __("Invalid title", "ctx-products") . $value['value'];
                        $input['title']['error'] = false;
                        $valid = false;
                    }
                    break;
               
                case "address":
                    
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['address']['msg'] = __("We need your address", "ctx-products") . $value['value'];
                        $input['address']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "city":
                    
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['city']['msg'] = __("Type in your city", "ctx-products") . $value['value'];
                        $input['city']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "consent":
                    
                    if (!$value['value']) {
                        $input['consent']['error'] = true;
                        $input['consent']['msg'] = __("Please consent to our privacy policies", "ctx-products");
                        $valid = false;
                    }
                    break;
            }
        }
        if ($valid) {
            return false;
        }
        return $input;
    }

    public function sanitize_item() {
        
    }

    public function send_order_admin($data) {
        $order_table = "<h2>" . __("New Order", "ctx-products") . "</h2>";
        $order_table .= "<h3>" . __("Customer", "ctx-products") . "</h3>";
        $order_table .= "<table><tr><td>" .  __("Name", "ctx-products") . ":</td><td>";
        $order_table .= $data['user']['title']['value'] . $data['user']['forename']['value'] . $data['user']['surname']['value'] . "</td></tr>";
        $order_table .= "<tr><td>" .  __("Email", "ctx-products") . ":</td><td>" . $data['user']['email']['value'] . "</td></tr>";
        $order_table .= "<tr><td>" .  __("Address", "ctx-products") . ":</td><td>" . $data['user']['address']['value'] . "</td></tr>";
        $order_table .= "<tr><td></td><td>" . $data['user']['zip']['value'] . $data['user']['city']['value'] . "</td></tr></table>";
        $order_table .= "<h3>" .  __("Ordered Products", "ctx-products") . "</h3>";
        $order_table .= "<ul>";
        foreach($data['cart'] as $item) {
            $post = get_post( $item['id'] );
            $order_table .= "<li>" . $item['count'] . "x <h href='" . $post->guid . "'>" .  $post->post_title . "</a></li>";
        }
        $order_table .= "</ul>";
        $order_table .= $data['user']['comment']['value'] ? "<h3>Kommentar</h3><p>" . $data['user']['comment']['value'] . "</p>": "";
        $addresses = $this->get_admin_address();
        return wp_mail( $addresses, __("New Order", "ctx-products"), $order_table, array('Content-Type: text/html; charset=UTF-8'));
    }

    private function get_admin_address() {
        $options = get_option( 'ctx_product_options');
        if(!array_key_exists('admin_mail', $options)) {
            return  get_option('admin_email');
        }
        if(empty($options['admin_mail'])) {
            return  get_option('admin_email');
        }
        return $options['admin_mail'];
    }

    public function send_order_user($data) {
        $options = get_option( 'ctx_product_options');
        if(!array_key_exists('mail_subject', $options) && !array_key_exists('mail_content', $options)) {
            return  false;
        }
        
        $text = $options['mail_content'];
        $text = str_replace("#_FORENAME", $data['user']['forename']['value'], $text);
        $text = str_replace("#_SURNAME", $data['user']['surname']['value'], $text);
        $text = str_replace("#_EMAIL", $data['user']['email']['value'], $text);
        $text = str_replace("#_ADDRESS", $data['user']['address']['value'], $text);
        $text = str_replace("#_CITY", $data['user']['city']['value'], $text);
        $text = str_replace("#_ZIP", $data['user']['zip']['value'], $text);
        if(strpos($text, '#_ORDERLIST')) {
            $order_table = "<ul>";
            foreach($data['cart'] as $item) {
                $post = get_post( $item['id'] );
                $order_table .= "<li>" . $item['count'] . "x <h href='" . $post->guid . "'>" .  $post->post_title . "</a></li>";
            }
            $order_table .= "</ul>";
            $text = str_replace("#_ORDERLIST", $order_table, $text);
        }
        
        return wp_mail( $data['user']['email']['value'], $options['mail_subject'], $text, array('Content-Type: text/html; charset=UTF-8'));
    }

    public function get_permission($data) {
        return true;
    }

}


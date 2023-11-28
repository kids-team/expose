<?php

namespace Contexis\Expose;

class Order {

	public static function init() {
		new self();
	}

	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_order_route' ) );
	}


	public function register_order_route(){
        register_rest_route( "expose/v2", "/order", ['methods' => 'POST', "callback" => [$this, "process_order"], "permission_callback" => [$this, "get_permission"]], false );
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
                        $input['zip']['msg'] = __("ZIP code must be a number", "expose");
                        $input['zip']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "email":
                    if(!filter_var($value['value'], FILTER_VALIDATE_EMAIL) || empty($value['value'])) { 
                        $input['email']['error'] = filter_var($value['value'], FILTER_VALIDATE_EMAIL) . __("Please give us a valid email address", "expose");
                        $valid = false;
                    }
                    break;
                case "forename":
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['forename']['msg'] = __("Your forename is missing", "expose") . $value['value'];
                        $input['forename']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "surname":
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['surname']['msg'] = __("Your surname is missing", "expose") . $value['value'];
                        $input['surname']['error'] = true;
                        $valid = false;
                    }
                    break;               
                case "address":
                    
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['address']['msg'] = __("We need your address", "expose") . $value['value'];
                        $input['address']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "city":
                    
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['city']['msg'] = __("Type in your city", "expose") . $value['value'];
                        $input['city']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "consent":
                    
                    if (!$value['value']) {
                        $input['consent']['error'] = true;
                        $input['consent']['msg'] = __("Please consent to our privacy policies", "expose");
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
        $order_table = "<h2>" . __("New Order", "expose") . "</h2>";
        $order_table .= "<h3>" . __("Customer", "expose") . "</h3>";
        $order_table .= "<table><tr><td>" .  __("Name", "expose") . ":</td><td>";
        $order_table .= $data['user']['forename']['value'] . $data['user']['surname']['value'] . "</td></tr>";
        $order_table .= "<tr><td>" .  __("Email", "expose") . ":</td><td>" . $data['user']['email']['value'] . "</td></tr>";
        $order_table .= "<tr><td>" .  __("Address", "expose") . ":</td><td>" . $data['user']['address']['value'] . "</td></tr>";
        $order_table .= "<tr><td></td><td>" . $data['user']['zip']['value'] . $data['user']['city']['value'] . "</td></tr></table>";
        $order_table .= "<h3>" .  __("Ordered Products", "expose") . "</h3>";
        $order_table .= "<ul>";
        foreach($data['cart'] as $item) {
            $post = get_post( $item['id'] );
            $order_table .= "<li>" . $item['count'] . "x <h href='" . $post->guid . "'>" .  $post->post_title . "</a></li>";
        }
        $order_table .= "</ul>";
        $order_table .= $data['user']['comment']['value'] ? "<h3>Kommentar</h3><p>" . $data['user']['comment']['value'] . "</p>": "";
        $addresses = $this->get_admin_address();
        return wp_mail( $addresses, __("New Order", "expose"), $order_table, array('Content-Type: text/html; charset=UTF-8'));
    }

    private function get_admin_address() {
        $options = get_option( 'expose_options');
        if(!array_key_exists('admin_mail', $options)) {
            return  get_option('admin_email');
        }
        if(empty($options['admin_mail'])) {
            return  get_option('admin_email');
        }
        return $options['admin_mail'];
    }

    public function send_order_user($data) {
        $options = get_option( 'expose_options');
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

    // Let's add a nonce here later...
    public function get_permission($data) {
        return true;
    }

}

Order::init();
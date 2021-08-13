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
        $send = $this->send_order($data);
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
                        $input['zip']['msg'] = "Postleitzahl muss Nummer sein";
                        $input['zip']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "email":
                    if(!filter_var($value['value'], FILTER_VALIDATE_EMAIL) || empty($value['value'])) {
                        $input['email']['error'] = filter_var($value['value'], FILTER_VALIDATE_EMAIL) . " Bitte eine gültige E-Mail-Adresse angeben";
                        $valid = false;
                    }
                    break;
                case "forename":
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['forename']['msg'] = "Bitte den Vornamen angeben" . $value['value'];
                        $input['forename']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "surname":
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['surname']['msg'] = "Bitte den Nachnamen angeben weil scheiß " . $value['value'];
                        $input['surname']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "title":
                    
                    if (preg_match($rexSafety, $value['value'])) {
                        $input['title']['msg'] = "Ungültiger Titel" . $value['value'];
                        $input['title']['error'] = false;
                        $valid = false;
                    }
                    break;
               
                case "address":
                    
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['address']['msg'] = "Bitte eine gültige Adresse angeben" . $value['value'];
                        $input['address']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "city":
                    
                    if (preg_match($rexSafety, $value['value']) || empty($value['value'])) {
                        $input['city']['msg'] = "Bitte den Wohnort angeben" . $value['value'];
                        $input['city']['error'] = true;
                        $valid = false;
                    }
                    break;
                case "consent":
                    
                    if (!$value['value']) {
                        $input['consent']['error'] = true;
                        $input['consent']['msg'] = "Bitte stimmen Sie der Dantenschutzverordnung zu";
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

    public function send_order($data) {
        $order_table = "<h2>Neue Bestellung</h2>";
        $order_table .= "<h3>Auftraggeber</h3>";
        $order_table .= "<table><tr><td>Name:</td><td>";
        $order_table .= $data['user']['title']['value'] . $data['user']['forename']['value'] . $data['user']['surname']['value'] . "</td></tr>";
        $order_table .= "<tr><td>E-mail:</td><td>" . $data['user']['email']['value'] . "</td></tr>";
        $order_table .= "<tr><td>Adresse:</td><td>" . $data['user']['address']['value'] . "</td></tr>";
        $order_table .= "<tr><td>Ort:</td><td>" . $data['user']['plz']['value'] . $data['user']['city']['value'] . "</td></tr></table>";
        $order_table .= "<h3>Bestellte Produkte</h3>";
        $order_table .= "<ul>";
        foreach($data['cart'] as $item) {
            $post = get_post( $item['id'] );
            $order_table .= "<li>" . $item['count'] . "x <h href='" . $post->guid . "'>" .  $post->post_title . "</a></li>";
        }
        $order_table .= "</ul>";
        $order_table .= $data['user']['comment']['value'] ? "<h3>Kommentar</h3><p>" . $data['user']['comment']['value'] . "</p>": "";
        
        return wp_mail( "thomas@kids-team.at", "Neue Bestellung", $order_table, array('Content-Type: text/html; charset=UTF-8'));
    }

    public function get_permission($data) {
        return true;
    }

}


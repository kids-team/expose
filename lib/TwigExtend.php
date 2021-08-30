<?php
namespace Contexis\Products;

class TwigExtend {

    public static function add_to_twig($twig) {
        $twig->addFunction( new \Twig\TwigFunction( 'settings_fields', [__CLASS__,'settings_fields'] ) );
        $twig->addFunction( new \Twig\TwigFunction( 'do_settings_sections', [__CLASS__,'do_settings_sections'] ) );
        $twig->addFunction( new \Twig\TwigFunction( 'settings_errors', [__CLASS__,'settings_errors'] ) );
        
        return $twig;
    }

    public static function settings_fields($options) {
        settings_fields( $options );
    }

    public static function do_settings_sections($options) {
        do_settings_sections( $options );
    }

    public static function settings_errors() {
        settings_errors( );
    }
}
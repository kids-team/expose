<?php
namespace Contexis\Products\Blocks;

class ProductsShop extends Block {

    public $blocks = [
        "shop"
    ];

    public function render($attributes, $content, $full_data) : string {     
        $html = "<script>productSettings = " . json_encode($attributes) . "</script>";
        $html .= '<div id="app"></div>';
        return $html;
    }

}

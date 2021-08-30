<?php

function install() {
    add_option('ctx_product_options', [
        'slug'=>'products',
        'mail_subject'=>__("Your Order", "ctx-products"),
        'mail_content'=>__("Dear #_FORENAME,\n\nThank you for your order. We will send you the following products:\n\n#_PRODUCTLIST\n\nBlessings, your Shop", "ctx-products"),
        'consent'=>__("I consent to the #_PRIVACY and alow you to process my data for this very order. All my data will be deleted after shipping.", "ctx-products"),
    ]);
}
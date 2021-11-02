<?php

namespace Contexis\Products;

class Product {

	/*
	 * Constructor - the brain of our class
	 * */ 
	public function __construct() {
		add_action( 'init', array( $this, 'register_product_post_type' ) );
		add_action( 'rest_api_init', [$this, 'add_rest_fields'] );
		add_filter( 'manage_ctx-products_posts_columns', array($this, 'set_custom_columns') );
        add_action( 'manage_ctx-products_posts_custom_column' , array($this, 'custom_column'), 10, 2 );
	}


	public function register_product_post_type(){
		$args = [
			'hierarchical' 		  => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_rest'        => true,
			'show_admin_column' => true,
			'show_in_menu'        => true,
			'menu_position'       => 30,
			'query_var' => true, 
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'publicly_queryable'  => true,
			'supports'            => [ 'title', 'editor', 'author', 'thumbnail', 'custom-fields', 'revisions', 'excerpt', 'post-formats', 'page_attributes' ],
			'rewrite'             => ['slug' => get_option( 'ctx_product_options' )['slug'], "with_front" => false],
			'menu_icon'           => 'dashicons-cart',
			'labels' => [
				'name'               => __('Products', 'ctx-products'),
				'singular_name'      => __('Product', 'ctx-products'),
				'add_new'            => __('Create new product', 'ctx-products'),
				'add_new_item'       => __('Create new Product', 'ctx-products'),
				'edit_item'          => __('Edit product', 'ctx-products'),
				'new_item'           => __('New product', 'ctx-products'),
				'all_items'          => __('All products' ,'ctx-products'),
				'view_item'          => __('View product', 'ctx-products'),
				'search_items'       => __('Search products', 'ctx-products'),
				'not_found'          => __('No products found', 'ctx-products'),
				'not_found_in_trash' => __('No products found in trash', 'ctx-products'),
				'parent_item_colon'  => '',
				'menu_name'          => __('Products', 'ctx-products')
			]
		];

		register_post_type( 'ctx-products', $args );

		register_taxonomy(
			'product-categories',  // The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
			'ctx-products',             // post type name
			array(
				'hierarchical' => true,
				'label' => __('Product category', 'ctx-products'), // display name
				'query_var' => true,
				'show_in_rest'        => true,
				'show_ui'             => true,
			)
		);

		register_taxonomy(
			'product-tags',  // The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
			'ctx-products',             // post type name
			array(
				'hierarchical' => false,
				'label' => __('Product tag', 'ctx-products'), // display name
				'query_var' => true,
				'show_in_rest'        => true,
				'show_ui'             => true,
			)
		);
		
	}

	/**
	 * Filter function Set coulmns in the Admin Products Table
	 * for manage_ctx-color-palette_posts_columns Filter
	 * 
	 * @param array $columns
	 * @return array $columns
	 */
	public function set_custom_columns($columns) {
		$columns = ['image' => __( 'Image', 'ctx-theme' )] + $columns;
        $columns['category'] = __( 'Category', 'ctx-theme' );
        $columns['image'] = __( 'Image', 'ctx-theme' );
		$columns['description'] = __( 'Description', 'ctx-theme' );
        return $columns;
    }

    public function custom_column( $column, $post_id ) {
		global $post;
        if($column == "image") {
			
            echo get_the_post_thumbnail($post->featured_media, 'thumbnail');
			return;
        }
        if($column == "category") {
			$categories = get_the_terms( $post->ID , 'product-categories' );
			if($categories) {
				echo $categories[0]->name;
				return;
			}
			echo '<span style="color: red">' . __("No Category", "ctx-products") . '</span>';
        }
		if($column == "description") {
			$description = substr($post->post_excerpt, 50);

			if($description) {
				$description .= strlen($description) == 50 ?: "...";
				echo $description;
				return;
			}
			
			echo '<span style="color: red">' . __("No Description", "ctx-products") . '</span>';
        }
    }

	public function add_rest_fields() {
		register_rest_field( 
			'ctx-products', // Where to add the field (Here, blog posts. Could be an array)
			'images', // Name of new field (You can call this anything)
			[
				'get_callback'    => [$this, 'rest_get_images'],
				'update_callback' => null,
				'schema'          => null,
			]
		);
		register_rest_field( 
			'ctx-products', // Where to add the field (Here, blog posts. Could be an array)
			'category', // Name of new field (You can call this anything)
			[
				'get_callback'    => [$this, 'rest_get_categories'],
				'update_callback' => null,
				'schema'          => null,
			]
		);
		register_rest_field( 
			'ctx-products', // Where to add the field (Here, blog posts. Could be an array)
			'tags', // Name of new field (You can call this anything)
			[
				'get_callback'    => [$this, 'rest_get_terms'],
				'update_callback' => null,
				'schema'          => null,
			]
		);
		register_rest_field( 
			'ctx-products', // Where to add the field (Here, blog posts. Could be an array)
			'cart', // Name of new field (You can call this anything)
			[
				'get_callback'    => function() {return 1;},
				'update_callback' => null,
				'schema'          => null,
			]
		);
	}

	public function rest_get_images( $object, $field_name, $request ) {
		$feat_img_array = $object['featured_media'] ? [
			"thumbnail" => wp_get_attachment_image_src($object['featured_media'], 'thumbnail', false)[0],
			"medium" => wp_get_attachment_image_src($object['featured_media'], 'medium', false)[0],
			"large" => wp_get_attachment_image_src($object['featured_media'], 'large', false)[0],
			"full" => wp_get_attachment_image_src($object['featured_media'], 'full', false)[0]
		] : [];
		return $feat_img_array;
	}

	public function rest_get_categories($object, $field_name, $request) {
		$categories = wp_get_post_terms( $object['id'], 'product-categories' );
		return $categories ? $categories[0] : [];
	}

	public function rest_get_terms($object, $field_name, $request) {
		return wp_get_post_terms( $object['id'], 'product-tagss' );
	}

}
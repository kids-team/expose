<?php

namespace Contexis\Expose;

use Contexis\WpGitHubUpdater\WordPressPluginUpdater;

final class Plugin {

	private string $plugin_file;
	private bool $updater_registered = false;

	public function __construct( string $plugin_file ) {
		$this->plugin_file = $plugin_file;
	}

	public function boot(): void {
		add_action( 'plugins_loaded', [ $this, 'load_textdomain' ], 1 );
		add_action( 'init', [ $this, 'register_block_editor_assets' ] );
		add_action( 'init', [ $this, 'register_frontend_assets' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_frontend_translations' ] );
		add_action( 'load-plugins.php', [ $this, 'register_updater' ] );
		add_action( 'load-update-core.php', [ $this, 'register_updater' ] );
		add_action( 'load-update.php', [ $this, 'register_updater' ] );

		new Product();
		new Settings();
		new Form();
		new Order();
	}

	public static function activate(): void {
		add_option(
			'expose_options',
			[
				'slug' => 'products',
				'thanks_head' => __( 'Thank you for your order!', 'expose' ),
				'thanks_text' => __( 'We have recieved your order and we will send it to you as soon as possible', 'expose' ),
				'consent' => __( "I consent to all <a href='https://bestlifeonline.com/47-weird-laws-around-world/'>law stuff</a> and allow you to process my data for this very order. All my data will be deleted after shipping.", 'expose' ),
			]
		);
	}

	public function load_textdomain(): void {
		load_plugin_textdomain(
			'expose',
			false,
			dirname( plugin_basename( $this->plugin_file ) ) . '/languages'
		);
	}

	public function register_updater(): void {
		if ( $this->updater_registered || ! class_exists( WordPressPluginUpdater::class ) ) {
			return;
		}

		WordPressPluginUpdater::fromPluginFile( $this->plugin_file, 'kids-team', 'expose' )
			->registerHooks();

		$this->updater_registered = true;
	}

	public function register_block_editor_assets(): void {
		$script_asset_path = dirname( $this->plugin_file ) . '/build/index.asset.php';

		if ( ! file_exists( $script_asset_path ) ) {
			return;
		}

		$script_asset = require $script_asset_path;

		wp_register_script(
			'expose-block-editor',
			plugins_url( '/build/index.js', $this->plugin_file ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
		wp_set_script_translations(
			'expose-block-editor',
			'expose',
			plugin_dir_path( $this->plugin_file ) . '/languages'
		);

		wp_enqueue_style(
			'expose-block-editor',
			plugins_url( '/build/index.css', $this->plugin_file ),
			[],
			$script_asset['version']
		);

		foreach ( [ 'shop', 'cart' ] as $block ) {
			register_block_type( dirname( $this->plugin_file ) . '/build/blocks/' . $block );
		}
	}

	public function register_frontend_assets(): void {
		$script_asset_path = dirname( $this->plugin_file ) . '/build/shop.asset.php';

		if ( ! file_exists( $script_asset_path ) ) {
			return;
		}

		$script_asset = require $script_asset_path;

		wp_register_script(
			'expose-frontend',
			plugins_url( '/build/shop.js', $this->plugin_file ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_register_style(
			'expose-frontend-style',
			plugins_url( '/build/style-shop.css', $this->plugin_file ),
			[],
			$script_asset['version']
		);
	}

	public function register_frontend_translations(): void {
		wp_set_script_translations(
			'expose-frontend',
			'expose',
			plugin_dir_path( $this->plugin_file ) . '/languages'
		);
	}
}

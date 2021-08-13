/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';
import icons from './icons';

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n; 

import './style.scss';
import './editor.scss';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;
const settings = {
	title: __( 'Product shop', 'ctx-products' ),
	description: __( 'Shows s free shop', 'ctx-products' ),
	icon: icons.shop,
	apiVersion: 2,
	keywords: [
		'ctx-products',
		__( 'events', 'ctx-products' ),
		__( 'list', 'ctx-products' ),
	],
	attributes,
	edit: Edit,
	save() { return null; }
};


export { name, category, metadata, settings };
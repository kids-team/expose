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
	title: __( 'Expose', 'expose' ),
	description: __( 'Shows a free shop', 'expose' ),
	icon: icons.shop,
	apiVersion: 2,
	keywords: [
		'expose',
		__( 'events', 'expose' ),
		__( 'list', 'expose' ),
	],
	attributes,
	edit: Edit,
	save() { return null; }
};


export { name, category, metadata, settings };
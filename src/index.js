/**
 * Wordpress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */

import * as cart from './blocks/cart';
import * as shop from './blocks/shop';

/**
 * Stylesheets
 */
import './common/styles/editor.scss';
import './common/styles/style.scss';

const registerBlock = ( block ) => {
	if ( ! block ) return;
	const { name, settings } = block;
	registerBlockType( name, settings );
};

export const registerBlocks = () => {
	[ shop, cart ].forEach( registerBlock );
};

registerBlocks();

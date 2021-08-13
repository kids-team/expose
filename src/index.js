/**
 * Wordpress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */

import * as shop from './blocks/shop';

/**
 * Stylesheets
 */
import './common/styles/editor.scss';
import './common/styles/style.scss';


const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, category, settings } = block;

	registerBlockType( name, {
		category: category,
		...settings,
	} );
};

export const registerBlocks = () => {
	[
		shop
	].forEach( registerBlock );
};

registerBlocks();
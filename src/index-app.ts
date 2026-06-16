/**
 * Wordpress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import type { NamedBlockSettings } from './blocks/types';

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

const registerBlock = ( block: NamedBlockSettings ) => {
	if ( ! block ) return;
	const { name, settings } = block;
	registerBlockType( name, settings as Parameters<typeof registerBlockType>[1] );
};

export const registerBlocks = () => {
	( [ shop, cart ] as NamedBlockSettings[] ).forEach( registerBlock );
};

registerBlocks();

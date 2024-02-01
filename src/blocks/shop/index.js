/**
 * Internal dependencies
 */
import metadata from './block.json';

import edit from './edit';
import './editor.scss';
import icons from './icons';
import './style.scss';

/**
 * Wordpress dependencies
 */

const { name } = metadata;

const settings = {
	icons: icons.shop,
	edit,
	save: () => {
		return null;
	},
};

export { name, settings };

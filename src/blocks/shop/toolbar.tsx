import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import type { EditorProps, ShopBlockAttributes, TextAlignment } from '../types';

const Toolbar = ( { attributes: { textAlignment }, setAttributes }: EditorProps<ShopBlockAttributes> ) => {
	return (
		<BlockControls>
			<AlignmentToolbar
				value={ textAlignment }
				onChange={ ( event ) => setAttributes( { textAlignment: event as TextAlignment } ) }
			/>
		</BlockControls>
	);
};

export default Toolbar;

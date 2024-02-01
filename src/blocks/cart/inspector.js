/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Inspector controls
 */
const Inspector = ( props ) => {
	const {
		attributes: { icon },
		setAttributes,
	} = props;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icon', 'ctx-blocks' ) } initialOpen={ true }>
					<PanelRow>
						<TextControl
							label={ __( 'Icon', 'ctx-blocks' ) }
							value={ icon }
							onChange={ ( value ) => {
								setAttributes( { icon: value } );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;

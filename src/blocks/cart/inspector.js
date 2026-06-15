/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/**
 * Inspector controls
 */
const Inspector = (props) => {
	const {
		attributes: { icon },
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={__("Icon", "expose")} initialOpen={true}>
				<PanelRow>
					<TextControl
						label={__("Icon", "expose")}
						value={icon}
						onChange={(value) => {
							setAttributes({ icon: value });
						}}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;

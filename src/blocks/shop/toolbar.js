import { AlignmentToolbar, BlockControls } from "@wordpress/block-editor";
import { Component, Fragment } from "@wordpress/element";

class Toolbar extends Component {
	render() {
		const {
			attributes: { textAlignment },
			setAttributes,
		} = this.props;

		return (
			<BlockControls>
				<AlignmentToolbar
					value={textAlignment}
					onChange={(event) => setAttributes({ textAlignment: event })}
				/>
			</BlockControls>
		);
	}
}

export default Toolbar;

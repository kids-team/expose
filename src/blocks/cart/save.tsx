import { useBlockProps } from '@wordpress/block-editor';
import type { CartBlockAttributes, SaveProps } from '../types';

const Save = ( props: SaveProps<CartBlockAttributes> ) => {
	const {
		attributes: { iconRight, iconOnly },
	} = props;

	const buttonClasses = [ iconRight ? 'ctx__button--reverse' : false, iconOnly ? 'ctx__button--icon-only' : false ]
		.filter( Boolean )
		.join( ' ' );

	const buttonStyle = {
		display: 'none',
	};
	const blockProps = useBlockProps.save( { className: buttonClasses, style: buttonStyle, id: 'ctx-cart-button' } );

	return <div style={ { display: 'none' } } { ...blockProps }></div>;
};

export default Save;

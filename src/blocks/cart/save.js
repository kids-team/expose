import { useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { url, icon, iconRight, iconOnly, title, newTab, rel },
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

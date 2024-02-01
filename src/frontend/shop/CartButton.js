import React, { useState } from '@wordpress/element';
import MiniCart from './MiniCart';

const CartButton = ( props ) => {
	const { cartSize, onClick } = props;

	const [ showMiniCart, setShowMiniCart ] = useState( false );
	const className = cartSize ? '' : '';
	return (
		<div className="ctx-cart-button">
			<button className={ className } onClick={ onClick } disabled={ cartSize == 0 }>
				<em className="material-icons">shopping_cart</em>
				{ !! cartSize && <span className="ctx-cart-button-badge">{ cartSize }</span> }
			</button>
			<MiniCart show={ cartSize > 0 } />
		</div>
	);
};

export default CartButton;

import MiniCart from './MiniCart';

type CartButtonProps = {
	cartSize: number;
	onClick: () => void;
};

const CartButton = ( { cartSize, onClick }: CartButtonProps ) => {

	const className = cartSize ? '' : '';
	return (
		<div className="ctx-cart-button">
			<button className={ className } onClick={ onClick } disabled={ cartSize === 0 }>
				<em className="material-icons material-symbols-outlined">shopping_cart</em>
				{ !! cartSize && <span className="ctx-cart-button-badge">{ cartSize }</span> }
			</button>
			<MiniCart show={ cartSize > 0 } />
		</div>
	);
};

export default CartButton;

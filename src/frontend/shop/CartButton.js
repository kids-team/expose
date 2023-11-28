const CartButton = ( props ) => {
	const { cartSize, onClick } = props;

	const className = cartSize ? 'button button--pop button--primary' : 'button button--disabled';
	return (
		<>
			<button className={ className } onClick={ onClick } disabled={ cartSize == 0 }>
				Warenkorb
				<em className="material-icons">shopping_cart</em>
				{ !! cartSize && <span className="badge ml-2 primary-inverse">{ cartSize }</span> }
			</button>
		</>
	);
};

export default CartButton;

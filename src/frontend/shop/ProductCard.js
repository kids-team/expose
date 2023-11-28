import React, { useContext, useState } from '@wordpress/element';
import { AppContext } from '../services/context';

const ProductCard = ( props ) => {
	const { product, onCartClick } = props;
	const { state, dispatch } = useContext( AppContext );

	const [ quantity, setQuantity ] = useState( 1 );

	const addToCart = ( product, count = 1 ) => {
		dispatch( { type: 'ADD_TO_CART', payload: { id: product, count } } );
	};

	return (
		<div key={ product.id } className="ctx-product-card">
			<div className="ctx-product-card-image">
				<img src={ product._embedded[ 'wp:featuredmedia' ][ 0 ].source_url } />
			</div>
			<div className="ctx-product-card-content">
				<h4>{ product.title.rendered }</h4>
				<div
					dangerouslySetInnerHTML={ {
						__html: product.content.rendered,
					} }
				/>
				<div className="ctx-product-card-footer">
					<div>
						<button className="button button--secondary">Details</button>
					</div>
					<div>
						<div className="ctx-number-picker">
							<button className="button button--secondary" onClick={ () => setQuantity( quantity - 1 ) }>
								-
							</button>
							<span className="ctx-number-picker__number">{ quantity }</span>
							<button className="button button--secondary" onClick={ () => setQuantity( quantity + 1 ) }>
								+
							</button>
						</div>
						<span
							className="button button--link button--pop button--gray button--icon"
							onClick={ () => addToCart( product.id, quantity ) }
						>
							<em className="material-icons">add_shopping_cart</em>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

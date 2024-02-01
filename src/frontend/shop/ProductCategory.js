import React, { useContext, useState } from '@wordpress/element';
import { AppContext } from '../services/context';
import ProductCard from './ProductCard';

const ProductCategory = ( props ) => {
	const { products, onCartClick, title } = props;

	const { state, dispatch } = useContext( AppContext );

	const [ showCategory, setShowCategory ] = useState( [] );

	const addToCart = ( product, count = 1 ) => {
		if ( count == 0 ) return dispatch( { type: 'REMOVE_FROM_CART', payload: { id: product, count } } );
		dispatch( { type: 'ADD_TO_CART', payload: { id: product, count } } );
	};

	return (
		<>
			<div className={ `ctx-products-category ${ showCategory ? '' : 'hidden' }` }>
				<button
					onClick={ () => {
						setShowCategory( ! showCategory );
					} }
				>
					<i className="material-icons">keyboard_arrow_down</i>
				</button>
				<h4>{ title }</h4>
			</div>
			<div className={ `ctx-product-grid-wrapper ${ showCategory ? '' : 'hidden' }` }>
				<div className="ctx-product-grid">
					{ products.map( ( product ) => {
						return (
							<ProductCard
								key={ product.id }
								product={ product }
								onCartClick={ () => addToCart( product.id, quantity ) }
							/>
						);
					} ) }
				</div>
			</div>
		</>
	);
};

export default ProductCategory;

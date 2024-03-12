import React, { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';

const ProductCard = ( props ) => {
	const { product, onCartClick } = props;
	const { state, dispatch } = useContext( AppContext );

	console.log( product );
	console.log( product._embedded[ 'wp:featuredmedia' ][ 0 ].media_details.sizes.large.source_url );
	return (
		<div key={ product.id } className="ctx-product-card">
			<div className="ctx-product-card-image">
				<img src={ product._embedded[ 'wp:featuredmedia' ][ 0 ].media_details.sizes.large.source_url } />
			</div>
			<div className="ctx-product-card-content">
				<h4>{ product.title.rendered }</h4>
				<div
					dangerouslySetInnerHTML={ {
						__html: product.excerpt.rendered,
					} }
				/>
				<div className="ctx-product-card-footer">
					<div>
						<button
							className="button button--secondary"
							onClick={ () => {
								dispatch( { type: 'SET_SELECTED_PRODUCT', payload: product.id } );
							} }
						>
							{ __( 'Details', 'expose' ) }
						</button>
					</div>
					<div className="ctx-product-card-actions">
						<span
							className="ctx-product-card-add"
							onClick={ () => dispatch( { type: 'ADD_TO_CART', payload: { id: product.id, count: 1 } } ) }
						>
							<em className="material-icons material-symbols-outlined">add_shopping_cart</em>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

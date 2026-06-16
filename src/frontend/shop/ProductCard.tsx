import { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';
import type { Product } from '../types';

type ProductCardProps = {
	product: Product;
};

const ProductCard = ( { product }: ProductCardProps ) => {
	const { dispatch } = useContext( AppContext );
	const imageUrl =
		product?.images?.large || product?.images?.medium || product?.images?.thumbnail || product?.images?.full;

	return (
		<div className="ctx-product-card">
			<div className="ctx-product-card-image">
				{ imageUrl ? <img src={ imageUrl } alt={ product?.title?.rendered || '' } /> : null }
			</div>
			<div className="ctx-product-card-content">
				<h4>{ product.title.rendered }</h4>
				<div
					dangerouslySetInnerHTML={ {
						__html: product.excerpt?.rendered ?? '',
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

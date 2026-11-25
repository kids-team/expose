import apiFetch from '@wordpress/api-fetch';
import { Dialog, Stepper } from '@contexis/wp-ui';
import { useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';
import type { Product } from '../types';

const ProductModal = () => {
	const { state, dispatch } = useContext( AppContext );
	const [ loadedProduct, setProduct ] = useState<Product | null>( null );
	const [ quantity, setQuantity ] = useState( 1 );

	const id = state.selectedProduct;

	const product = loadedProduct?.id === id ? loadedProduct : null;

	const addToCart = ( productId: number, count = 1 ) => {
		if ( count === 0 ) {
			return dispatch( { type: 'REMOVE_FROM_CART', payload: { id: productId, count } } );
		}

		dispatch( { type: 'ADD_TO_CART', payload: { id: productId, count } } );
	};

	useEffect( () => {
		if ( ! id ) return;

		let active = true;

		apiFetch<Product>( { path: `/wp/v2/ctx-products/${ id }` } )
			.then( ( data: Product ) => {
				if ( active ) setProduct( data );
			} )
			.catch( () => {
				if ( active ) setProduct( null );
			} );

		return () => {
			active = false;
		};
	}, [ id ] );

	return (
		<Dialog
			open={ Boolean( id ) }
			onOpenChange={ ( open ) => {
				if ( ! open ) dispatch( { type: 'SET_SELECTED_PRODUCT', payload: 0 } );
			} }
		>
			<Dialog.Portal>
				<Dialog.Backdrop className="ctx-order-modal__backdrop" />
				<Dialog.Panel variant="fullscreen" className="ctx-order-modal__dialog">
					<Dialog.Header className="ctx-order-modal__header">
						<Dialog.Title className="ctx-order-modal__title">
							{ product?.title.rendered || __( 'Details', 'expose' ) }
						</Dialog.Title>
						<Dialog.Close className="ctx-order-modal__close" aria-label={ __( 'Close', 'expose' ) }>
							<i className="material-icons material-symbols-outlined" aria-hidden="true">
								close
							</i>
						</Dialog.Close>
					</Dialog.Header>

					<div className="ctx-order-modal__body ctx-product-modal__body">
						{ product?.images?.full && (
							<img className="ctx-product-modal__image" src={ product.images.full } alt="" />
						) }
						<div dangerouslySetInnerHTML={ { __html: product?.content?.rendered ?? '' } } />

						<div className="ctx-product-modal__footer">
							<Dialog.Close className="button button--secondary">
								{ __( 'Close', 'expose' ) }
							</Dialog.Close>
							<div className="ctx-product-modal__actions">
								<Stepper value={ quantity } onChange={ ( value ) => setQuantity( value ) } min={ 1 } />
								<button
									type="button"
									className="ctx-product-card-add"
									aria-label={ __( 'Add to cart', 'expose' ) }
									disabled={ ! product }
									onClick={ () => {
										if ( product ) addToCart( product.id, quantity );
									} }
								>
									<em className="material-icons material-symbols-outlined" aria-hidden="true">
										add_shopping_cart
									</em>
								</button>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog.Portal>
		</Dialog>
	);
};

export default ProductModal;

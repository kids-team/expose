import { useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import NumberPicker from '../../_externalNumberPicker';
import { AppContext } from '../services/context';

const ProductModal = ( props ) => {
	const { state, dispatch } = useContext( AppContext );
	const [ product, setProduct ] = useState( null );
	const [ status, setStatus ] = useState( 'INIT' );
	const [ quantity, setQuantity ] = useState( 1 );

	const id = state.selectedProduct;

	const closeModel = ( event ) => {
		event.bubbles = false;
		if ( event.target !== event.currentTarget ) return;
		dispatch( { type: 'SET_SELECTED_PRODUCT', payload: 0 } );
	};

	const addToCart = ( product, count = 1 ) => {
		if ( count == 0 ) return dispatch( { type: 'REMOVE_FROM_CART', payload: { id: product, count } } );
		dispatch( { type: 'ADD_TO_CART', payload: { id: product, count } } );
	};

	useEffect( () => {
		if ( ! id ) return;

		setStatus( 'LOADING' );

		fetch( `/wp-json/wp/v2/ctx-products/${ id }` )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setProduct( data );
				setStatus( 'LOADED' );
			} );
	}, [ id ] );

	return (
		<div
			className={ 'ctx-order-modal ' + ( id ? 'open' : '' ) }
			onClick={ ( event ) => {
				closeModel( event );
			} }
		>
			<div className="ctx-order-modal-window">
				<div className="ctx-order-modal-headerimage">
					<img src={ product?.images?.full } />

					<h2>{ product?.title.rendered }</h2>
					<button
						onClick={ () => {
							dispatch( { type: 'SET_SELECTED_PRODUCT', payload: 0 } );
						} }
					>
						<i className="material-icons">close</i>
					</button>
				</div>

				<div>
					<img alt={ product?.title.raw } />
					<p dangerouslySetInnerHTML={ { __html: product?.content?.rendered } }></p>
				</div>

				<div className="ctx-order-modal-footer">
					<button
						className="button button--secondary"
						onClick={ () => {
							dispatch( { type: 'SET_SELECTED_PRODUCT', payload: 0 } );
						} }
					>
						{ __( 'Close', 'expose' ) }
					</button>
					<div className="ctx-order-modal-actions">
						<NumberPicker value={ quantity } onChange={ ( value ) => setQuantity( value ) } min={ 1 } />
						<span className="ctx-product-card-add" onClick={ () => addToCart( product.id, quantity ) }>
							<em className="material-icons">add_shopping_cart</em>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;

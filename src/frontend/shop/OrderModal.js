import Form from '@contexis/wp-react-form';
import { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import NumberPicker from '../../_externalNumberPicker';
import { AppContext } from '../services/context';

const OrderModal = ( props ) => {
	const { state, dispatch } = useContext( AppContext );

	const closeModel = ( event ) => {
		event.bubbles = false;
		if ( event.target !== event.currentTarget ) return;
		dispatch( { type: 'SET_ORDER_MODAL', payload: false } );
	};

	const setCartItem = ( id, count ) => {
		const type = count == 0 ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
		dispatch( { type, payload: { id, count } } );
	};

	return (
		<div
			className={ `ctx-order-modal ${ state.showOrderModal ? 'open' : '' }` }
			onClick={ ( event ) => {
				closeModel( event );
			} }
		>
			<div className="ctx-order-modal-window">
				<div className="ctx-order-modal-header">
					<h2>{ __( 'Order', 'expose' ) }</h2>
					<button
						onClick={ () => {
							dispatch( { type: 'SET_ORDER_MODAL', payload: false } );
						} }
					>
						<i className="material-icons material-symbols-outlined">close</i>
					</button>
				</div>

				{ state.formStatus !== 'SUCCESS' ? (
					<div className="ctx-order-modal-content">
						<div className="ctx-order-modal-summary">
							<h3>{ __( 'Order Summary', 'expose' ) }</h3>
							{ Object.keys( state.cart ).map( ( id, key ) => {
								const product = state.products.find( ( product ) => product.id == id );
								const quantity = state.cart[ id ];

								return (
									<div className="ctx-order-modal-product" key={ key }>
										<div className="ctx-order-modal-product-image">
											<img
												src={
													product?._embedded[ 'wp:featuredmedia' ][ 0 ].media_details.sizes
														.thumbnail.source_url
												}
											/>
										</div>
										<div className="ctx-order-modal-product-content">
											<h4>{ product?.title.rendered }</h4>
											<div
												dangerouslySetInnerHTML={ {
													__html: product?.excerpt?.rendered,
												} }
											/>
										</div>
										<div className="ctx-order-modal-product-footer">
											<div className="ctx-order-modal-product-actions">
												<NumberPicker
													value={ quantity }
													onChange={ ( value ) => setCartItem( id, value ) }
													min={ 0 }
													steps={ 1 }
												/>
											</div>
										</div>
									</div>
								);
							} ) }
						</div>
						<div className="form ctx-order-modal-form">
							<h3>{ __( 'Order Form', 'expose' ) }</h3>
							<Form
								formUrl={
									props.formId
										? `/wp-json/gbf-form/v2/form/${ props.formId }`
										: '/wp-json/order/vs/form'
								}
								extraData={ {
									products: state.cart,
								} }
								submitUrl="/wp-json/expose/v2/order"
								onSubmissionFinished={ ( response ) => {
									dispatch( { type: 'SET_FORM_STATUS', payload: 'SUCCESS' } );
									dispatch( { type: 'SET_RESPONSE', payload: response.data } );
									dispatch( { type: 'RESET' } );
								} }
							/>
						</div>
					</div>
				) : (
					<div
						className="ctx-order-modal-success"
						dangerouslySetInnerHTML={ { __html: state.response } }
					></div>
				) }
			</div>
		</div>
	);
};

export default OrderModal;

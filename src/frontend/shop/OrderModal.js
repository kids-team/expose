import { useContext } from '@wordpress/element';
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
			<div className="ctx-order-modal-content">
				<div className="ctx-order-modal-header">
					<h2>Order</h2>
					<button
						onClick={ () => {
							dispatch( { type: 'SET_ORDER_MODAL', payload: false } );
						} }
					>
						<i className="material-icons">close</i>
					</button>
				</div>

				<div className="ctx-order-modal-summary">
					{ Object.keys( state.cart ).map( ( id ) => {
						const product = state.products.find( ( product ) => product.id == id );
						const quantity = state.cart[ id ];
						console.log( product );
						return (
							<div className="ctx-order-modal-product">
								<div className="ctx-order-modal-product-image">
									<img
										src={
											product?._embedded[ 'wp:featuredmedia' ][ 0 ].media_details.sizes.thumbnail
												.source_url
										}
									/>
								</div>
								<div className="ctx-order-modal-product-content">
									<h4>{ product?.title.rendered }</h4>
									<div
										dangerouslySetInnerHTML={ {
											__html: product?.content.rendered,
										} }
									/>
								</div>
								<div className="ctx-order-modal-product-footer">
									<div className="ctx-number-picker">
										<button
											className="button button--secondary"
											onClick={ () => {
												setCartItem( id, 0 );
											} }
										>
											<i className="material-icons">delete</i>
										</button>
										<input
											className="ctx-number-picker__number"
											value={ quantity }
											onChange={ ( event ) => {
												setCartItem( id, event.target.value );
											} }
										/>
									</div>
								</div>
							</div>
						);
					} ) }
				</div>
				<div className="ctx-order-modal-customer">
					<h3>Customer</h3>
					<div className="ctx-order-modal-customer-form">
						<div className="ctx-order-modal-customer-form-group">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" />
						</div>
						<div className="ctx-order-modal-customer-form-group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" />
						</div>
						<div className="ctx-order-modal-customer-form-group">
							<label htmlFor="phone">Phone</label>
							<input type="text" name="phone" />
						</div>
						<div className="ctx-order-modal-customer-form-group">
							<label htmlFor="address">Address</label>
							<input type="text" name="address" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderModal;

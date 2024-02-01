import React, { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { AppContext } from '../services/context';

const MiniCart = ( props ) => {
	const show = props.show;
	const { state, dispatch } = useContext( AppContext );

	const hasProducts = Object.keys( state.cart ).length > 0;
	return (
		<>
			{ hasProducts && ! state.showOrderModal ? (
				<div className={ `ctx-minicart` }>
					<h3>{ __( 'Cart', 'expose' ) }</h3>
					<div className="ctx-minicart-content">
						{ Object.keys( state.cart ).map( ( id, key ) => {
							const product = state.products.find( ( product ) => product.id == id );
							const quantity = state.cart[ id ];

							return (
								<div className="ctx-minicart-product" key={ key }>
									<div className="ctx-minicart-product-image">
										<img
											src={
												product?._embedded[ 'wp:featuredmedia' ][ 0 ].media_details.sizes
													.thumbnail.source_url
											}
										/>
									</div>
									<div className="ctx-minicart-product-content">
										<h4>{ product?.title.rendered }</h4>
									</div>
									<div className="ctx-minicart-product-footer">
										{ quantity } { __( 'pcs.', 'expose' ) }
									</div>
								</div>
							);
						} ) }
					</div>
					<div className="ctx-minicart-footer">
						<button
							onClick={ () => {
								dispatch( { type: 'SET_ORDER_MODAL', payload: true } );
							} }
							className="button button--primary"
						>
							{ __( 'Checkout', 'expose' ) }
						</button>
					</div>
				</div>
			) : (
				<></>
			) }
		</>
	);
};

export default MiniCart;

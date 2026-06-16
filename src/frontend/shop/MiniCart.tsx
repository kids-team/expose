import { Fragment, useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { AppContext } from '../services/context';

type MiniCartProps = {
	show: boolean;
};

const MiniCart = ( { show }: MiniCartProps ) => {
	const { state, dispatch } = useContext( AppContext );

	const hasProducts = show && Object.keys( state.cart ).length > 0;
	return (
		<Fragment>
			{ hasProducts && ! state.showOrderModal ? (
				<div className={ `ctx-minicart` }>
					<h3>{ __( 'Cart', 'expose' ) }</h3>
					<div className="ctx-minicart-content">
						{ Object.keys( state.cart ).map( ( id, key ) => {
							const product = state.products.find( ( product ) => product.id === Number( id ) );
							const quantity = state.cart[ id ];

							return (
								<div className="ctx-minicart-product" key={ key }>
									<div className="ctx-minicart-product-image">
										<img
											src={
												product?.images?.thumbnail || product?.images?.medium || product?.images?.large
											}
											alt={ product?.title?.rendered || '' }
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
				null
			) }
		</Fragment>
	);
};

export default MiniCart;

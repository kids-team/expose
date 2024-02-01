import { createRoot } from '@wordpress/element';
import { AppProvider } from './frontend/services/context';
import Shop from './frontend/shop/Shop';

document.addEventListener( 'DOMContentLoaded', () => {
	const rootElement = document.getElementById( 'ctx-products-shop' );

	if ( rootElement ) {
		const attributes = JSON.parse( rootElement.dataset.attributes );
		const root = createRoot( rootElement );

		const hash = window.location.hash;
		const category = hash ? hash.replace( '#', '' ) : '';

		const cartButton = document.getElementById( 'ctx-cart-button' );
		cartButton?.classList.add( 'has-cart' );

		root.render(
			<>
				<AppProvider>
					<Shop attributes={ attributes } category={ category } />
				</AppProvider>
			</>
		);
	}
} );

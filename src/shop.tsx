import { createRoot } from '@wordpress/element';
import { AppProvider } from './frontend/services/context';
import Shop, { type ShopAttributes } from './frontend/shop/Shop';

document.addEventListener( 'DOMContentLoaded', () => {
	document.querySelectorAll<HTMLElement>( '[data-ctx-products-shop]' ).forEach( ( rootElement ) => {
		const serializedAttributes = rootElement.dataset[ 'attributes' ];
		if ( ! serializedAttributes ) {
			return;
		}

		const attributes = JSON.parse( serializedAttributes ) as ShopAttributes;
		const root = createRoot( rootElement );

		const hash = window.location.hash;
		const category = hash ? hash.replace( '#', '' ) : '';

		root.render(
			<AppProvider>
				<Shop attributes={ attributes } category={ category } />
			</AppProvider>
		);
	} );
} );

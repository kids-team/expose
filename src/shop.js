import { createRoot } from '@wordpress/element';
import '@contexis/wp-react-form/style.css';
import { AppProvider } from './frontend/services/context';
import Shop from './frontend/shop/Shop';

document.addEventListener( 'DOMContentLoaded', () => {
	document.querySelectorAll( '[data-ctx-products-shop]' ).forEach( ( rootElement ) => {
		const attributes = JSON.parse( rootElement.dataset.attributes );
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

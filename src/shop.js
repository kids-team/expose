import { createRoot } from '@wordpress/element';
import { AppProvider } from './frontend/services/context';
import Shop from './frontend/shop/Shop';

document.addEventListener( 'DOMContentLoaded', () => {
	const rootElement = document.getElementById( 'ctx-products-shop' );
	console.log( 'shop', rootElement );

	if ( rootElement ) {
		const attributes = JSON.parse( rootElement.dataset.attributes );
		const root = createRoot( rootElement );
		root.render(
			<>
				<AppProvider>
					<Shop attributes={ attributes } />
				</AppProvider>
			</>
		);
	}
} );

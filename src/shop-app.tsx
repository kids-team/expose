import { createRoot } from '@wordpress/element';
import '@contexis/wp-react-form/style.css';
import { AppProvider } from './frontend/services/context';
import Shop from './frontend/shop/Shop';

document.addEventListener( 'DOMContentLoaded', () => {
	document.querySelectorAll<HTMLElement>( '[data-ctx-products-shop]' ).forEach( ( rootElement ) => {
		const serializedAttributes = rootElement.dataset[ 'attributes' ];
		if ( ! serializedAttributes ) {
			return;
		}

		const attributes = JSON.parse( serializedAttributes ) as {
			form?: number;
			showFilter?: boolean;
			showSearchbar?: boolean;
			sortByCategory?: boolean;
		};
		const root = createRoot( rootElement );

		const hash = window.location.hash;
		const category = hash ? hash.replace( '#', '' ) : '';

		root.render(
			<AppProvider>
				<Shop
					attributes={ attributes as {
						form?: number;
						showFilter?: boolean;
						showSearchbar?: boolean;
						sortByCategory?: boolean;
					} }
					category={ category }
				/>
			</AppProvider>
		);
	} );
} );

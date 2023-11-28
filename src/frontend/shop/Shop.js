import apiFetch from '@wordpress/api-fetch';
import { useContext, useEffect, useState } from '@wordpress/element';
import { AppContext } from '../services/context';
import CartButton from './CartButton';
import CategoryView from './CategoryView';
import ListView from './ListView';
import OrderModal from './OrderModal';
import ProductModal from './ProductModal';

import './style.scss';

const Shop = ( { attributes } ) => {
	const { state, dispatch } = useContext( AppContext );

	console.log( state );

	const [ filteredProducts, setFilteredProducts ] = useState( [] );
	const [ selectedProduct, setSelectedProduct ] = useState( 0 );

	useEffect( () => {
		apiFetch( { path: 'wp/v2/ctx-products?_embed&per_page=100' } ).then( ( posts ) => {
			dispatch( { type: 'SET_PRODUCTS', payload: posts } );
			dispatch( { type: 'SET_CATEGORIES', payload: getAvailableCategories( posts ) } );
		} );
	}, [] );

	const filterProducts = ( event ) => {
		const filter = event.target.value;
		const result = state.products.filter( ( product ) => {
			return product.title.rendered.toLowerCase().includes( filter.toLowerCase() );
		} );
		setFilteredProducts( result );
	};

	const getAvailableCategories = ( products ) => {
		let categories = {};
		console.log( 'hihi', products );
		for ( const product of products ) {
			categories = { ...categories, ...product.categories };
		}

		return categories;
	};

	const products = filteredProducts.length ? filteredProducts : state.products;

	const cartSize = Object.keys( state.cart ).length;

	return (
		<div>
			<div className="flex justify-between">
				<div className="input">
					<input type="text" onChange={ filterProducts } />
				</div>
				<div>
					<CartButton
						cartSize={ cartSize }
						onClick={ () => {
							dispatch( { type: 'SET_ORDER_MODAL', payload: true } );
						} }
					/>
				</div>
			</div>
			{ attributes.sortByCategory ? (
				<CategoryView products={ products } onDetails={ ( id ) => setSelectedProduct( id ) } />
			) : (
				<ListView products={ products } onDetails={ ( id ) => setSelectedProduct( id ) } />
			) }
			<ProductModal id={ selectedProduct } />
			<OrderModal />
		</div>
	);
};

Shop.defaultProps = {};
export default Shop;

import apiFetch from '@wordpress/api-fetch';
import { useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import { createPortal } from 'react-dom';
import { AppContext } from '../services/context';
import CartButton from './CartButton';
import CategoryView from './CategoryView';
import Filter from './Filter';
import ListHeading from './ListHeading';
import ListView from './ListView';
import OrderModal from './OrderModal';
import ProductModal from './ProductModal';

import './style.scss';

const Shop = ( { attributes, category } ) => {
	const { state, dispatch } = useContext( AppContext );

	const [ filteredProducts, setFilteredProducts ] = useState( [] );
	const [ selectedProduct, setSelectedProduct ] = useState( 0 );

	const [ showFilter, setShowFilter ] = useState( false );

	const selectedCategory = state.selectedCategory;
	const selectedTags = state.selectedTags;

	useEffect( () => {
		const queryParams = {
			_embed: true,
			per_page: 100,
		};

		queryParams[ 'product-categories' ] = selectedCategory ? selectedCategory : undefined;
		queryParams[ 'product-tags' ] = selectedTags.length ? selectedTags.join( ',' ) : undefined;

		dispatch( { type: 'SET_STATUS', payload: 'LOADING' } );
		apiFetch( { path: addQueryArgs( 'wp/v2/ctx-products', queryParams ) } ).then( ( posts ) => {
			dispatch( { type: 'SET_PRODUCTS', payload: posts } );
			dispatch( { type: 'SET_STATUS', payload: 'SUCCESS' } );
		} );
	}, [ selectedCategory, selectedTags ] );

	useEffect( () => {
		apiFetch( { path: 'wp/v2/product-categories' } ).then( ( categories ) => {
			const result = {};
			for ( const category of categories ) {
				result[ category.id ] = category.name;
			}
			dispatch( { type: 'SET_CATEGORIES', payload: result } );
			if ( category ) {
				console.log( category );
				Object.entries( result ).forEach( ( [ key, value ] ) => {
					console.log( key, value );
					if ( value.toLowerCase() === category.toLowerCase() ) {
						dispatch( { type: 'SET_SELECTED_CATEGORY', payload: key } );
					}
				} );
			}
		} );

		apiFetch( { path: 'wp/v2/product-tags' } ).then( ( tags ) => {
			const result = {};
			for ( const tag of tags ) {
				result[ tag.id ] = tag.name;
			}
			dispatch( { type: 'SET_TAGS', payload: result } );
		} );
	}, [] );

	const filterProducts = ( event ) => {
		const filter = event.target.value;

		const result = state.products.filter( ( product ) => {
			return product.title.rendered.toLowerCase().includes( filter.toLowerCase() );
		} );
		setFilteredProducts( result );
	};

	const products = filteredProducts.length ? filteredProducts : state.products;

	const cartSize = Object.keys( state.cart ).length;

	return (
		<div className="shop">
			<div className="shop-sidebar">
				{ attributes.showSearchbar ? (
					<>
						<div className="shop-sidebar-header">
							<div className="input">
								<label>{ __( 'Search', 'expose' ) }</label>
								<input type="search" onChange={ filterProducts } />
							</div>
							<button
								className="button mobile-filter-toggle"
								onClick={ () => {
									setShowFilter( ! showFilter );
								} }
							>
								<i className="material-icons">tune</i>
							</button>
						</div>

						{ attributes.showFilter ? <Filter showFilter={ showFilter } /> : <></> }
					</>
				) : (
					<div></div>
				) }
				{ createPortal(
					<CartButton
						cartSize={ cartSize }
						onClick={ () => {
							dispatch( { type: 'SET_ORDER_MODAL', payload: true } );
						} }
					/>,
					document.getElementById( 'ctx-cart-button' )
				) }
				<div></div>
			</div>
			{ attributes.sortByCategory && selectedCategory === 0 && selectedTags.length === 0 ? (
				<CategoryView
					className="shop-content"
					products={ products }
					onDetails={ ( id ) => setSelectedProduct( id ) }
				/>
			) : (
				<div className="shop-content">
					<ListHeading />
					<ListView products={ products } onDetails={ ( id ) => setSelectedProduct( id ) } />
				</div>
			) }
			<ProductModal />
			<OrderModal formId={ attributes.form ?? 0 } />
		</div>
	);
};

Shop.defaultProps = {};
export default Shop;

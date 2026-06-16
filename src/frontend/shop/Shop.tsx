import apiFetch from '@wordpress/api-fetch';
import { Fragment, useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import { createPortal } from 'react-dom';
import { AppContext } from '../services/context';
import type { CategoryMap, Product, TagMap } from '../types';
import CartButton from './CartButton';
import CategoryView from './CategoryView';
import Filter from './Filter';
import ListHeading from './ListHeading';
import ListView from './ListView';
import OrderModal from './OrderModal';
import ProductModal from './ProductModal';

import './style.scss';

type ShopAttributes = {
	form?: number;
	showFilter?: boolean;
	showSearchbar?: boolean;
	sortByCategory?: boolean;
};

type ShopProps = {
	attributes: ShopAttributes;
	category: string;
};

type TaxonomyTerm = {
	id: number;
	name: string;
};

const Shop = ( { attributes, category }: ShopProps ) => {
	const { state, dispatch } = useContext( AppContext );

	const [ filteredProducts, setFilteredProducts ] = useState<Product[]>( [] );
	const [ showFilter, setShowFilter ] = useState( false );

	const selectedCategory = state.selectedCategory;
	const selectedTags = Array.isArray( state.selectedTags ) ? state.selectedTags : [];

	useEffect( () => {
		const queryParams: Record<string, string | number | boolean | undefined> = {
			_embed: true,
			per_page: 100,
		};

		queryParams[ 'product-categories' ] = selectedCategory ? selectedCategory : undefined;
		queryParams[ 'product-tags' ] = selectedTags.length ? selectedTags.join( ',' ) : undefined;

		dispatch( { type: 'SET_STATUS', payload: 'LOADING' } );
		apiFetch<Product[]>( { path: addQueryArgs( '/wp/v2/ctx-products', queryParams ) } )
			.then( ( posts ) => {
				dispatch( { type: 'SET_PRODUCTS', payload: posts } );
				dispatch( { type: 'SET_STATUS', payload: 'SUCCESS' } );
			} )
			.catch( () => {
				dispatch( { type: 'SET_PRODUCTS', payload: [] } );
				dispatch( { type: 'SET_STATUS', payload: 'ERROR' } );
			} );
	}, [ dispatch, selectedCategory, selectedTags ] );

	useEffect( () => {
		apiFetch<TaxonomyTerm[]>( { path: '/wp/v2/product-categories' } )
			.then( ( categories ) => {
				const result: CategoryMap = {};
				for ( const categoryItem of categories ) {
					result[ String( categoryItem.id ) ] = categoryItem.name;
				}
				dispatch( { type: 'SET_CATEGORIES', payload: result } );
				if ( category ) {
					Object.entries( result ).forEach( ( [ key, value ] ) => {
						if ( value.toLowerCase() === category.toLowerCase() ) {
							dispatch( { type: 'SET_SELECTED_CATEGORY', payload: key } );
						}
					} );
				}
			} )
			.catch( () => {
				dispatch( { type: 'SET_CATEGORIES', payload: {} } );
			} );

		apiFetch<TaxonomyTerm[]>( { path: '/wp/v2/product-tags' } )
			.then( ( tags ) => {
				const result: TagMap = {};
				for ( const tag of tags ) {
					result[ String( tag.id ) ] = tag.name;
				}
				dispatch( { type: 'SET_TAGS', payload: result } );
			} )
			.catch( () => {
				dispatch( { type: 'SET_TAGS', payload: {} } );
			} );
	}, [ category, dispatch ] );

	const filterProducts = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		const target = event.target as HTMLInputElement | null;
		const filter = target?.value ?? '';

		const result = state.products.filter( ( product ) => {
			return product.title.rendered.toLowerCase().includes( filter.toLowerCase() );
		} );
		setFilteredProducts( result );
	};

	const products = filteredProducts.length ? filteredProducts : state.products;

	const cartSize = Object.keys( state.cart ).length;
	const cartButton = document.getElementById( 'ctx-cart-button' );

	useEffect( () => {
		cartButton?.classList.toggle( 'has-cart', cartSize > 0 );
	}, [ cartButton, cartSize ] );

	return (
		<div className="shop">
			<div className="shop-sidebar">
				{ attributes.showSearchbar ? (
					<Fragment>
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
								<i className="material-icons material-symbols-outlined">tune</i>
							</button>
						</div>

						{ attributes.showFilter ? <Filter showFilter={ showFilter } /> : null }
					</Fragment>
				) : (
					<div></div>
				) }
				{ cartButton
					? createPortal(
							<CartButton
								cartSize={ cartSize }
								onClick={ () => {
									dispatch( { type: 'SET_FORM_STATUS', payload: 'INIT' } );
									dispatch( { type: 'SET_RESPONSE', payload: '' } );
									dispatch( { type: 'SET_ORDER_MODAL', payload: true } );
								} }
							/>,
							cartButton
						)
					: null }
				<div></div>
			</div>
			{ attributes.sortByCategory && selectedCategory === 0 && selectedTags.length === 0 ? (
				<CategoryView
					className="shop-content"
					products={ products }
				/>
			) : (
				<div className="shop-content">
					<ListHeading />
					<ListView products={ products } />
				</div>
			) }
			<ProductModal />
			<OrderModal formId={ attributes.form ?? 0 } />
		</div>
	);
};

export default Shop;

import { useContext, useState } from '@wordpress/element';
import { AppContext } from '../services/context';
import ProductCategory from './ProductCategory';

const CategoryView = ( { products } ) => {
	const { state, dispatch } = useContext( AppContext );

	const [ showCategory, setShowCategory ] = useState( [] );

	const addToCart = ( product, count = 1 ) => {
		dispatch( { type: 'ADD_TO_CART', payload: { id: product, count } } );
	};

	const getProductsByCategory = ( category ) => {
		return products.filter( ( product ) => {
			return product.categories.hasOwnProperty( category );
		} );
	};

	return (
		<div>
			{ Object.entries( state.categories ).map( ( [ key, value ] ) => {
				const products = getProductsByCategory( key );

				return <ProductCategory key={ key } title={ value } products={ products } />;
			} ) }
		</div>
	);
};

export default CategoryView;

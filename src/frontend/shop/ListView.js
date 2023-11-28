import { useContext } from '@wordpress/element;';
import { AppContext } from '../services/context';
import ProductCard from './ProductCard';

const ListView = ( { products } ) => {
	const { state, dispatch } = useContext( AppContext );

	return (
		<div className="grid grid--columns-3 grid--gap-8">
			{ products.map( ( product ) => {
				return <ProductCard key={ product.id } product={ product } />;
			} ) }
		</div>
	);
};

export default ListView;

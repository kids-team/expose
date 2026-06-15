import { Fragment, useContext } from '@wordpress/element';
import { AppContext } from '../services/context';
import FakeCards from './FakeCards';
import ProductCard from './ProductCard';

const ListView = ( { products, className } ) => {
	const { state, dispatch } = useContext( AppContext );

	return (
		<Fragment>
			{ state.status === 'SUCCESS' ? (
				<div className={ `ctx-product-grid ${ className }` }>
					{ products.map( ( product ) => {
						return <ProductCard key={ product.id } product={ product } />;
					} ) }
				</div>
			) : (
				<div className={ `ctx-product-grid ${ className }` }>
					<FakeCards count={ 6 } />
				</div>
			) }
		</Fragment>
	);
};

export default ListView;

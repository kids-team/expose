import { Fragment, useContext } from '@wordpress/element';
import { AppContext } from '../services/context';
import type { Product } from '../types';
import FakeCards from './FakeCards';
import ProductCard from './ProductCard';

type ListViewProps = {
	products: Product[];
	className?: string;
};

const ListView = ( { products, className = '' }: ListViewProps ) => {
	const { state } = useContext( AppContext );

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

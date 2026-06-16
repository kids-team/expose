import { Fragment, useState } from '@wordpress/element';
import type { Product } from '../types';
import ProductCard from './ProductCard';

type ProductCategoryProps = {
	products: Product[];
	title: string;
};

const ProductCategory = ( { products, title }: ProductCategoryProps ) => {

	const [ showCategory, setShowCategory ] = useState( true );

	return (
		<Fragment>
			<div className={ `ctx-products-category ${ showCategory ? '' : 'hidden' }` }>
				<button
					onClick={ () => {
						setShowCategory( ! showCategory );
					} }
				>
					<i className="material-icons material-symbols-outlined">keyboard_arrow_down</i>
				</button>
				<h4>{ title }</h4>
			</div>
			<div className={ `ctx-product-grid-wrapper ${ showCategory ? '' : 'hidden' }` }>
				<div className="ctx-product-grid">
					{ products.map( ( product ) => {
						return <ProductCard key={ product.id } product={ product } />;
					} ) }
				</div>
			</div>
		</Fragment>
	);
};

export default ProductCategory;

import { Fragment, useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';
import FakeCards from './FakeCards';
import ProductCategory from './ProductCategory';

const CategoryView = ({ products, className }) => {
	const { state, dispatch } = useContext(AppContext);

	const getProductsByCategory = (category) => {
		return products.filter((product) => {
			return product.categories.hasOwnProperty(category);
		});
	};

	return (
		<Fragment>
			{state.status === 'SUCCESS' ? (
				<div className={className}>
					<h2>{__('All Products', 'expose')}</h2>
					{Object.entries(state.categories).map(([key, value]) => {
						const products = getProductsByCategory(key);

						return <ProductCategory key={key} title={value} products={products} />;
					})}
				</div>
			) : (
				<div className={className}>
					<h4 className="fake-heading"></h4>
					<div className="ctx-product-grid">
						<FakeCards count={3} />
					</div>
					<h4 className="fake-heading"></h4>
					<div className="ctx-product-grid">
						<FakeCards count={3} />
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default CategoryView;

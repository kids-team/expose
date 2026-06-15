import { Fragment, useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';
import FakeCards from './FakeCards';
import ListView from './ListView';
import ProductCategory from './ProductCategory';

const CategoryView = ({ products, className }) => {
	const { state, dispatch } = useContext(AppContext);
	const categories = Object.entries(state.categories);
	const hasCategories = categories.length > 0;

	const getProductsByCategory = (category) => {
		return products.filter((product) => {
			return product.categories && Object.prototype.hasOwnProperty.call(product.categories, category);
		});
	};

	return (
		<Fragment>
			{state.status === 'SUCCESS' ? (
				<div className={className}>
					<h2>{__('All Products', 'expose')}</h2>
					{!hasCategories ? <ListView products={products} /> : null}
					{categories.map(([key, value]) => {
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

import { useContext } from '@wordpress/element';
import { AppContext } from '../services/context';

const ProductModal = ( props ) => {
	const { id } = props;
	const { state, dispatch } = useContext( AppContext );

	if ( ! id ) return <></>;

	const product = state.products.find( ( product ) => product.id == id );

	return (
		<div>
			<h1>{ product?.title.raw }</h1>
		</div>
	);
};

export default ProductModal;

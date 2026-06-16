import { useCallback, useContext } from '@wordpress/element';
import { __, _n } from '@wordpress/i18n';
import { AppContext } from '../services/context';

const ListHeading = () => {
	const { state } = useContext( AppContext );
	const selectedTags = Array.isArray( state.selectedTags ) ? state.selectedTags : [];

	const getTags = useCallback( () => {
		const tags = selectedTags.map( ( tag ) => {
			return state.tags[ tag ];
		} );

		return tags.join( ', ' );
	}, [ selectedTags, state.tags ] );

	if ( state.selectedCategory === 0 && selectedTags.length === 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>{ __( 'All Products', 'expose' ) }</h2>
			</div>
		);
	}

	if ( state.selectedCategory === 0 && selectedTags.length > 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>
					{ _n( 'Selected Tag:', 'Selected Tags:', selectedTags.length, 'expose' ) }
					&nbsp;
					{ getTags() }
				</h2>
			</div>
		);
	}

	if ( state.selectedCategory !== 0 && selectedTags.length > 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>
					{ state.categories[ state.selectedCategory ] }
					&nbsp;
					{ _n( 'with tag:', 'with tags:', selectedTags.length, 'expose' ) }
					&nbsp;
					{ getTags() }
				</h2>
			</div>
		);
	}

	if ( state.selectedCategory !== 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>{ state.categories[ state.selectedCategory ] }</h2>
			</div>
		);
	}

	return null;
};

export default ListHeading;

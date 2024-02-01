import { useCallback, useContext } from '@wordpress/element';
import { __, _n } from '@wordpress/i18n';
import { React } from 'react';
import { AppContext } from '../services/context';

const ListHeading = () => {
	const { state } = useContext( AppContext );

	const getTags = useCallback( () => {
		const tags = state.selectedTags.map( ( tag ) => {
			return state.tags[ tag ];
		} );

		return tags.join( ', ' );
	} );

	if ( state.selectedCategory === 0 && state.selectedTags.length === 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>{ __( 'All Products', 'expose' ) }</h2>
			</div>
		);
	}

	if ( state.selectedCategory === 0 && state.selectedTags.length > 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>
					{ _n( 'Selected Tag:', 'Selected Tags:', state.selectedTags.length, 'expose' ) }
					&nbsp;
					{ getTags() }
				</h2>
			</div>
		);
	}

	if ( state.selectedCategory !== 0 && state.selectedTags.length > 0 ) {
		return (
			<div className="ctx-products-category">
				<h2>
					{ state.categories[ state.selectedCategory ] }
					&nbsp;
					{ _n( 'with tag:', 'with tags:', state.selectedTags.length, 'expose' ) }
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
};

export default ListHeading;

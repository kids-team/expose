/**
 * Internal dependencies
 */

import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	ComboboxControl,
	FormTokenField,
	Icon,
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import icons from './icons.js';

/**
 * Wordpress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { store as coreStore } from '@wordpress/core-data';

export default function ProductEdit( { attributes, setAttributes } ) {
	const {
		showImages,
		showFilter,
		showSearchbar,
		sortByCategory,
		dropShadow,
		view,
		form,
		textAlignment,
		showCategory,
		excerptLength,
		selectedCategories,
		selectedTags,
	} = attributes;

	const [ selectedCategoryState, setSelectedCategoryState ] = useState( selectedCategories );

	const categoryList = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const query = { hide_empty: true };
		const list = getEntityRecords( 'taxonomy', 'product-categories', query );
		let categoryOptionsArray = [];
		if ( ! list ) {
			return categoryOptionsArray;
		}

		list.map( ( category ) => {
			categoryOptionsArray.push( { id: category.id, name: category.name } );
		} );
		return categoryOptionsArray;
	}, [] );

	const tagList = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const query = { hide_empty: true };
		const list = getEntityRecords( 'taxonomy', 'product-tags', query );

		if ( ! list ) {
			return null;
		}
		return list;
	}, [] );

	const formList = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const query = { per_page: 100 };
		const list = getEntityRecords( 'postType', 'gbf-form', query );

		if ( ! list ) {
			return [];
		}
		let options = list.map( ( form ) => {
			return { value: form.id, label: form.title.rendered };
		} );

		options.unshift( { value: 0, label: __( 'Internal', 'expose' ) } );
		return options;
	}, [] );

	let tagNames = [];
	let tagsFieldValue = [];
	if ( tagList !== null ) {
		tagNames = tagList.map( ( tag ) => tag.name );

		tagsFieldValue = selectedTags.map( ( tagId ) => {
			let wantedTag = tagList.find( ( tag ) => {
				return tag.id === tagId;
			} );
			if ( wantedTag === undefined || ! wantedTag ) {
				return false;
			}
			return wantedTag.name;
		} );
	}

	const blockProps = useBlockProps( {
		className: [
			showImages ? 'hasImage' : false,
			dropShadow ? 'hover' : false,
			'view-' + view,
			'text-' + textAlignment,
		]
			.filter( Boolean )
			.join( ' ' ),
	} );

	const setCategory = ( category, checked ) => {
		var categories = selectedCategories;
		if ( checked && ! categories.includes( category ) ) {
			categories.push( category );
		}
		if ( ! checked && categories.includes( category ) ) {
			const index = categories.indexOf( category );
			categories.splice( index, 1 );
		}
		setAttributes( { selectedCategories: Array.from( categories ) } );
		setSelectedCategoryState( Array.from( categories ) );
		return;
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ __( 'Data', 'expose' ) } initialOpen={ true }>
				{ categoryList.map( ( category, i ) => (
					<CheckboxControl
						label={ category.name }
						key={ i }
						onChange={ ( value ) => {
							setCategory( category.id, value );
						} }
						checked={ selectedCategoryState.includes( category.id ) }
					/>
				) ) }

				<FormTokenField
					label={ __( 'Tags', 'expose' ) }
					value={ tagsFieldValue }
					suggestions={ tagNames }
					onChange={ ( selectedTags ) => {
						let selectedTagsArray = [];
						selectedTags.map( ( tagName ) => {
							const matchingTag = tagList.find( ( tag ) => {
								return tag.name === tagName;
							} );
							if ( matchingTag !== undefined ) {
								selectedTagsArray.push( matchingTag.id );
							}
						} );

						setAttributes( { selectedTags: selectedTagsArray } );
					} }
					__experimentalExpandOnFocus={ true }
				/>

				{ formList?.length && (
					<ComboboxControl
						label={ __( 'Form', 'expose' ) }
						options={ formList }
						value={ form }
						onChange={ ( value ) => setAttributes( { form: value } ) }
					/>
				) }
			</PanelBody>

			<PanelBody title={ __( 'Appearance', 'expose' ) } initialOpen={ true }>
				<label className="components-base-control__label" htmlFor="inspector-range-control-4">
					{ __( 'Style', 'expose' ) }
				</label>
				<br />
				<div className="styleSelector">
					<Button
						onClick={ () => setAttributes( { view: 'mini' } ) }
						className={ view == 'mini' ? 'active' : '' }
					>
						<Icon size="64" className="icon" icon={ icons.mini } />
						<div>{ __( 'Minimal', 'expose' ) }</div>
					</Button>
					<Button
						onClick={ () => setAttributes( { view: 'list' } ) }
						className={ view == 'list' ? 'active' : '' }
					>
						<Icon size="64" className="icon" icon={ icons.list } />
						<div>{ __( 'List', 'expose' ) }</div>
					</Button>
					<Button
						onClick={ () => setAttributes( { view: 'cards' } ) }
						className={ view == 'cards' ? 'active' : '' }
					>
						<Icon size="64" className="icon" icon={ icons.cards } />
						<div>{ __( 'Cards', 'expose' ) }</div>
					</Button>
				</div>
				{ showImages && (
					<Fragment>
						<PanelRow>
							<ToggleControl
								label={ __( 'Show filter', 'expose' ) }
								checked={ showFilter }
								onChange={ ( value ) => setAttributes( { showFilter: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Show searchbar', 'expose' ) }
								checked={ showSearchbar }
								onChange={ ( value ) => setAttributes( { showSearchbar: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Show category', 'expose' ) }
								checked={ showCategory }
								onChange={ ( value ) => setAttributes( { showCategory: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Sort by category', 'expose' ) }
								checked={ sortByCategory }
								onChange={ ( value ) => setAttributes( { sortByCategory: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Drop shadow', 'expose' ) }
								checked={ dropShadow }
								onChange={ ( value ) => setAttributes( { dropShadow: value } ) }
							/>
						</PanelRow>
					</Fragment>
				) }
				<RangeControl
					label={ __( 'Length of preview text', 'expose' ) }
					max={ 200 }
					min={ 0 }
					help={ __( 'Number of words', 'expose' ) }
					onChange={ ( value ) => {
						setAttributes( { excerptLength: value } );
					} }
					value={ excerptLength }
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{ inspectorControls }

			<div { ...blockProps }>
				<div className="components-placeholder is-large">
					<div className="components-placeholder__label">
						<span className="block-editor-block-icon has-colors">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#000000"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
							</svg>
						</span>
						{ __( 'Product Shop', 'expose' ) }
					</div>
					<div className="components-placeholder__instructions">
						{ __( 'See for settings in the inspector. The result can be seen in the frontend', 'expose' ) }
					</div>
				</div>
			</div>
		</>
	);
}

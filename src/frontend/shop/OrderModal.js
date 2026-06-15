import apiFetch from '@wordpress/api-fetch';
import { Accordion, AccordionSection, Button, Flex, FlexItem } from '@contexis/wp-react-form';
import { useContext, useEffect, useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import NumberPicker from '../../_externalNumberPicker';
import { AppContext } from '../services/context';
import OrderFormSection from './OrderFormSection';
import {
	buildInitialFormValues,
	normalizeFormSchema,
	validateFormValues,
} from './orderFormUtils';

const OrderModal = ( props ) => {
	const { state, dispatch } = useContext( AppContext );
	const [ formSchema, setFormSchema ] = useState( { fields: [] } );
	const [ formData, setFormData ] = useState( {} );
	const [ formErrors, setFormErrors ] = useState( {} );
	const [ formState, setFormState ] = useState( 'idle' );
	const [ openSection, setOpenSection ] = useState( 'summary' );
	const [ formErrorMessage, setFormErrorMessage ] = useState( '' );

	const formPath = props.formId ? `/gbf-form/v2/form/${ props.formId }` : '/expose/v2/form';
	const cartItems = Object.keys( state.cart );
	const productsInCart = useMemo(
		() =>
			cartItems.map( ( id ) => ( {
				id,
				product: state.products.find( ( product ) => product.id == id ),
				quantity: state.cart[ id ],
			} ) ),
		[ cartItems, state.cart, state.products ]
	);

	const closeModel = ( event ) => {
		event.bubbles = false;
		if ( event.target !== event.currentTarget ) return;
		dispatch( { type: 'SET_ORDER_MODAL', payload: false } );
		dispatch( { type: 'SET_FORM_STATUS', payload: 'INIT' } );
		dispatch( { type: 'SET_RESPONSE', payload: '' } );
	};

	const setCartItem = ( id, count ) => {
		const type = count == 0 ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
		dispatch( { type, payload: { id, count } } );
	};

	useEffect( () => {
		if ( ! state.showOrderModal ) {
			setFormErrors( {} );
			setFormErrorMessage( '' );
			setFormState( 'idle' );
			setOpenSection( 'summary' );
			return;
		}

		setFormState( 'loading' );
		setFormErrors( {} );
		setFormErrorMessage( '' );
		setOpenSection( 'summary' );

		apiFetch( { path: formPath } )
			.then( ( response ) => {
				const schema = normalizeFormSchema( response );
				setFormSchema( schema );
				setFormData( buildInitialFormValues( schema.fields ) );
				setFormState( 'loaded' );
			} )
			.catch( () => {
				setFormSchema( { fields: [] } );
				setFormData( {} );
				setFormState( 'error' );
				setFormErrorMessage( __( 'The order form could not be loaded.', 'expose' ) );
			} );
	}, [ formPath, state.showOrderModal ] );

	const handleFieldChange = ( name, value ) => {
		setFormData( ( prev ) => ( { ...prev, [ name ]: value } ) );
		setFormErrors( ( prev ) => ( { ...prev, [ name ]: '' } ) );
		setFormErrorMessage( '' );
	};

	const handleSubmit = () => {
		const errors = validateFormValues( formSchema.fields, formData );
		if ( Object.keys( errors ).length > 0 ) {
			setFormErrors( errors );
			setOpenSection( 'details' );
			return;
		}

		setFormState( 'submitting' );
		setFormErrorMessage( '' );

		apiFetch( {
			path: '/expose/v2/order',
			method: 'POST',
			data: {
				...formData,
				products: state.cart,
				...( props.formId ? { id: props.formId } : {} ),
			},
		} )
			.then( ( response ) => {
				dispatch( { type: 'SET_FORM_STATUS', payload: 'SUCCESS' } );
				dispatch( { type: 'SET_RESPONSE', payload: response.data } );
				dispatch( { type: 'RESET' } );
				setFormState( 'success' );
			} )
			.catch( ( error ) => {
				setFormState( 'loaded' );
				setFormErrorMessage(
					error?.message || __( 'There was a problem sending your order.', 'expose' )
				);
			} );
	};

	return (
		<div
			className={ `ctx-order-modal ${ state.showOrderModal ? 'open' : '' }` }
			onClick={ ( event ) => {
				closeModel( event );
			} }
		>
			<div className="ctx-order-modal-window">
				<div className="ctx-order-modal-header">
					<h2>{ __( 'Order', 'expose' ) }</h2>
					<button
						onClick={ () => {
							dispatch( { type: 'SET_ORDER_MODAL', payload: false } );
							dispatch( { type: 'SET_FORM_STATUS', payload: 'INIT' } );
							dispatch( { type: 'SET_RESPONSE', payload: '' } );
						} }
					>
						<i className="material-icons material-symbols-outlined">close</i>
					</button>
				</div>

				{ state.formStatus !== 'SUCCESS' ? (
					<div className="ctx-order-modal-content">
						<Accordion
							className="ctx-order-accordion"
							value={ [ openSection ] }
							onValueChange={ ( value ) => {
								if ( value[ 0 ] ) {
									setOpenSection( value[ 0 ] );
								}
							} }
						>
							<AccordionSection id="summary" title={ __( 'Order Summary', 'expose' ) }>
								<div className="ctx-order-modal-summary">
									{ productsInCart.map( ( item, key ) => (
										<div className="ctx-order-modal-product" key={ key }>
											<div className="ctx-order-modal-product-image">
												<img
													src={
														item.product?.images?.thumbnail ||
														item.product?.images?.medium ||
														item.product?.images?.large
													}
													alt={ item.product?.title?.rendered || '' }
												/>
											</div>
											<div className="ctx-order-modal-product-content">
												<h4>{ item.product?.title?.rendered }</h4>
												<div
													dangerouslySetInnerHTML={ {
														__html: item.product?.excerpt?.rendered,
													} }
												/>
											</div>
											<div className="ctx-order-modal-product-footer">
												<div className="ctx-order-modal-product-actions">
													<NumberPicker
														value={ item.quantity }
														onChange={ ( value ) => setCartItem( item.id, value ) }
														min={ 0 }
														steps={ 1 }
													/>
												</div>
											</div>
										</div>
									) ) }
									<Flex
										className="ctx-order-modal-summary-footer"
										align="center"
										justify="space-between"
										gap="1rem"
									>
										<FlexItem>
											<p>{ __( 'Review your items before you continue to the form.', 'expose' ) }</p>
										</FlexItem>
										<Button type="button" onClick={ () => setOpenSection( 'details' ) }>
											{ __( 'Continue', 'expose' ) }
										</Button>
									</Flex>
								</div>
							</AccordionSection>

							<AccordionSection id="details" title={ __( 'Your details', 'expose' ) }>
								<div className="form ctx-order-modal-form">
									{ formState === 'loading' ? (
										<p>{ __( 'Loading…', 'expose' ) }</p>
									) : formState === 'error' ? (
										<p className="ctx-order-modal-error" role="alert">
											{ formErrorMessage }
										</p>
									) : (
										<>
											{ formErrorMessage ? (
												<p className="ctx-order-modal-error" role="alert">
													{ formErrorMessage }
												</p>
											) : null }
											<OrderFormSection
												fields={ formSchema.fields }
												formData={ formData }
												errors={ formErrors }
												isSubmitting={ formState === 'submitting' }
												onChange={ handleFieldChange }
												onSubmit={ handleSubmit }
											/>
										</>
									) }
								</div>
							</AccordionSection>
						</Accordion>
					</div>
				) : (
					<div
						className="ctx-order-modal-success"
						dangerouslySetInnerHTML={ { __html: state.response } }
					></div>
				) }
			</div>
		</div>
	);
};

export default OrderModal;

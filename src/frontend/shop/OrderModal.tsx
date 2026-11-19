import apiFetch from '@wordpress/api-fetch';
import { Accordion, AccordionSection, Button, Dialog, Flex, FlexItem, Stepper } from '@contexis/wp-ui';
import { useContext, useEffect, useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';
import type { FormErrors, FormSchema, FormValues } from '../types';
import OrderFormSection from './OrderFormSection';
import { buildInitialFormValues, normalizeFormSchema, validateFormValues } from './orderFormUtils';

type OrderModalProps = {
	formId: number;
};

type OrderResponse = {
	status: 'ok' | 'error';
	data: string;
};

type ApiError = {
	message?: string;
};

const OrderModal = (props: OrderModalProps) => {
	const { state, dispatch } = useContext(AppContext);
	const [formSchema, setFormSchema] = useState<FormSchema>({ fields: [] });
	const [formData, setFormData] = useState<FormValues>({});
	const [formErrors, setFormErrors] = useState<FormErrors>({});
	const [formState, setFormState] = useState<'idle' | 'loading' | 'loaded' | 'submitting' | 'success' | 'error'>(
		'idle',
	);
	const [openSection, setOpenSection] = useState<'summary' | 'details'>('summary');
	const [formErrorMessage, setFormErrorMessage] = useState('');

	const formPath = props.formId ? `/gbf-form/v2/form/${props.formId}` : '/expose/v2/form';
	const cartItems = Object.keys(state.cart);
	const productsInCart = useMemo(
		() =>
			cartItems.map((id) => ({
				id,
				product: state.products.find((product) => product.id === Number(id)),
				quantity: state.cart[id],
			})),
		[cartItems, state.cart, state.products],
	);

	const closeModal = () => {
		dispatch({ type: 'SET_ORDER_MODAL', payload: false });
		dispatch({ type: 'SET_FORM_STATUS', payload: 'INIT' });
		dispatch({ type: 'SET_RESPONSE', payload: '' });
	};

	const setCartItem = (id: string, count: number) => {
		const type = count === 0 ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
		dispatch({ type, payload: { id, count } });
	};

	useEffect(() => {
		if (!state.showOrderModal) {
			setFormErrors({});
			setFormErrorMessage('');
			setFormState('idle');
			setOpenSection('summary');
			return;
		}

		setFormState('loading');
		setFormErrors({});
		setFormErrorMessage('');
		setOpenSection('summary');

		apiFetch<FormSchema | FormSchema['fields']>({ path: formPath })
			.then((response: FormSchema | FormSchema['fields']) => {
				const schema = normalizeFormSchema(response);
				setFormSchema(schema);
				setFormData(buildInitialFormValues(schema.fields));
				setFormState('loaded');
			})
			.catch(() => {
				setFormSchema({ fields: [] });
				setFormData({});
				setFormState('error');
				setFormErrorMessage(__('The order form could not be loaded.', 'expose'));
			});
	}, [formPath, state.showOrderModal]);

	const handleFieldChange = (name: string, value: unknown) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
		setFormErrors((prev) => ({ ...prev, [name]: '' }));
		setFormErrorMessage('');
	};

	const handleSubmit = () => {
		const errors = validateFormValues(formSchema.fields, formData);
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			setOpenSection('details');
			return;
		}

		setFormState('submitting');
		setFormErrorMessage('');

		apiFetch<OrderResponse>({
			path: '/expose/v2/order',
			method: 'POST',
			data: {
				...formData,
				products: state.cart,
				...(props.formId ? { id: props.formId } : {}),
			},
		})
			.then((response: OrderResponse) => {
				if (response.status !== 'ok') {
					throw new Error(response.data);
				}
				dispatch({ type: 'SET_FORM_STATUS', payload: 'SUCCESS' });
				dispatch({ type: 'SET_RESPONSE', payload: response.data });
				dispatch({ type: 'RESET' });
				setFormState('success');
			})
			.catch((error: ApiError) => {
				setFormState('loaded');
				setFormErrorMessage(error?.message || __('There was a problem sending your order.', 'expose'));
			});
	};

	return (
		<Dialog
			open={state.showOrderModal}
			onOpenChange={(open) => {
				if (!open) {
					closeModal();
				}
			}}
		>
			<Dialog.Portal>
				<Dialog.Backdrop className="ctx-order-modal__backdrop" />
				<Dialog.Panel
					variant="fullscreen"
					className="ctx-order-modal__dialog"
					aria-label={__('Order', 'expose')}
				>
					<Dialog.Header className="ctx-order-modal__header">
						<Dialog.Title className="ctx-order-modal__title">{__('Order', 'expose')}</Dialog.Title>
						<Dialog.Close className="ctx-order-modal__close" aria-label={__('Close', 'expose')}>
							<i className="material-icons material-symbols-outlined">close</i>
						</Dialog.Close>
					</Dialog.Header>

					<div className="ctx-order-modal__body">
						<div className="ctx-order-modal__layout">
							{state.formStatus !== 'SUCCESS' ? (
								<Accordion
									className="ctx-order-accordion"
									value={[openSection]}
									onValueChange={(value: string[]) => {
										if (value[0] === 'summary' || value[0] === 'details') {
											setOpenSection(value[0]);
										}
									}}
								>
									<AccordionSection id="summary" title={__('Order Summary', 'expose')}>
										<div className="ctx-order-modal-summary">
											{productsInCart.map((item, key) => (
												<div className="ctx-order-modal-product" key={key}>
													<div className="ctx-order-modal-product-image">
														<img
															src={
																item.product?.images?.thumbnail ||
																item.product?.images?.medium ||
																item.product?.images?.large
															}
															alt={item.product?.title?.rendered || ''}
														/>
													</div>
													<div className="ctx-order-modal-product-content">
														<h4>{item.product?.title?.rendered}</h4>
														<div
															dangerouslySetInnerHTML={{
																__html: item.product?.excerpt?.rendered ?? '',
															}}
														/>
													</div>
													<div className="ctx-order-modal-product-footer">
														<div className="ctx-order-modal-product-actions">
															<Stepper
																value={item.quantity ?? 0}
																onChange={(value) => setCartItem(item.id, value)}
																min={0}
																step={1}
															/>
														</div>
													</div>
												</div>
											))}
											<Flex
												className="ctx-order-modal-summary-footer"
												align="center"
												justify="space-between"
												gap="1rem"
											>
												<FlexItem>
													<p>
														{__(
															'Review your items before you continue to the form.',
															'expose',
														)}
													</p>
												</FlexItem>
												<Button type="button" onClick={() => setOpenSection('details')}>
													{__('Continue', 'expose')}
												</Button>
											</Flex>
										</div>
									</AccordionSection>

									<AccordionSection id="details" title={__('Your details', 'expose')}>
										<div className="form ctx-order-modal-form">
											{formState === 'loading' ? (
												<p>{__('Loading…', 'expose')}</p>
											) : formState === 'error' ? (
												<p className="ctx-order-modal-error" role="alert">
													{formErrorMessage}
												</p>
											) : (
												<>
													{formErrorMessage ? (
														<p className="ctx-order-modal-error" role="alert">
															{formErrorMessage}
														</p>
													) : null}
													<OrderFormSection
														fields={formSchema.fields}
														formData={formData}
														errors={formErrors}
														isSubmitting={formState === 'submitting'}
														onChange={handleFieldChange}
														onSubmit={handleSubmit}
													/>
												</>
											)}
										</div>
									</AccordionSection>
								</Accordion>
							) : (
								<div
									className="ctx-order-modal-success"
									dangerouslySetInnerHTML={{ __html: state.response }}
								></div>
							)}
						</div>
					</div>
				</Dialog.Panel>
			</Dialog.Portal>
		</Dialog>
	);
};

export default OrderModal;

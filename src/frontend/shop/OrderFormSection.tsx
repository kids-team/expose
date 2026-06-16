import { Button, FormFields } from '@contexis/wp-react-form';
import { __ } from '@wordpress/i18n';
import type { FormErrors, FormField, FormValues } from '../types';

type OrderFormSectionProps = {
	fields: FormField[];
	formData: FormValues;
	errors: FormErrors;
	isSubmitting: boolean;
	onChange: ( name: string, value: unknown ) => void;
	onSubmit: () => void;
};

const OrderFormSection = ( {
	fields,
	formData,
	errors,
	isSubmitting,
	onChange,
	onSubmit,
}: OrderFormSectionProps ) => {
	return (
		<div className="ctx-order-form-section">
			<FormFields
				fields={ fields as never }
				formData={ formData }
				errors={ errors }
				disabled={ isSubmitting }
				formTouched={ true }
				onChange={ onChange }
			/>

			<div className="ctx-order-form-section__footer">
				<Button onClick={ onSubmit } disabled={ isSubmitting } type="button">
					{ isSubmitting ? __( 'Processing…', 'expose' ) : __( 'Place order', 'expose' ) }
				</Button>
			</div>
		</div>
	);
};

export default OrderFormSection;

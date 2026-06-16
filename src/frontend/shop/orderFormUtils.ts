import { __ } from '@wordpress/i18n';
import type { FormErrors, FormField, FormSchema, FormValues } from '../types';

const isEmptyValue = ( value: unknown ) =>
	value === undefined || value === null || value === '' || value === false;

export const normalizeFormSchema = ( response: FormSchema | FormField[] ): FormSchema => {
	const rawFields =
		! Array.isArray( response ) && Array.isArray( response.fields )
			? response.fields
			: Array.isArray( response )
			? response
			: [];

	const fields = rawFields.filter(
		( field ): field is FormField => Boolean( field && field.name && field.type !== 'submit' )
	);

	return {
		fields,
	};
};

export const buildInitialFormValues = (
	fields: FormField[],
	initialValues: FormValues = {}
): FormValues => {
	const defaults = Object.fromEntries(
		fields.map( ( field ) => {
			if ( typeof field.defaultValue !== 'undefined' ) {
				return [ field.name, field.defaultValue ];
			}

			if ( field.type === 'checkbox' || field.type === 'toggle' ) {
				return [ field.name, false ];
			}

			if ( field.type === 'number' || field.type === 'range' || field.type === 'numberpicker' ) {
				return [ field.name, 0 ];
			}

			return [ field.name, '' ];
		} )
	);

	return {
		...defaults,
		...initialValues,
	};
};

const validateWithBrowserConstraints = ( field: FormField, value: unknown ): string | null => {
	if ( typeof document === 'undefined' ) {
		return null;
	}

	if ( field.type === 'html' || field.type === 'hidden' ) {
		return null;
	}

	if ( field.type === 'checkbox' || field.type === 'toggle' ) {
		const input = document.createElement( 'input' );
		input.type = 'checkbox';
		input.required = !! field.required;
		input.checked = value === true;

		return input.checkValidity() ? null : input.validationMessage;
	}

	if ( field.type === 'textarea' ) {
		const textarea = document.createElement( 'textarea' );
		textarea.required = !! field.required;
		textarea.value = typeof value === 'string' ? value : '';

		return textarea.checkValidity() ? null : textarea.validationMessage;
	}

	if ( field.type === 'select' || field.type === 'radio' || field.type === 'options' ) {
		const select = document.createElement( 'select' );
		select.required = !! field.required;
		select.value = typeof value === 'string' ? value : '';

		return select.checkValidity() ? null : select.validationMessage;
	}

	const input = document.createElement( 'input' );
	input.type = field.type === 'combobox' ? 'text' : field.type || 'text';
	input.required = !! field.required;

	if ( field.pattern ) {
		input.pattern = field.pattern;
	}

	if ( typeof field.min !== 'undefined' ) {
		input.min = String( field.min );
	}

	if ( typeof field.max !== 'undefined' ) {
		input.max = String( field.max );
	}

	input.value =
		typeof value === 'string' || typeof value === 'number' ? String( value ) : '';

	return input.checkValidity() ? null : input.validationMessage;
};

export const validateFormValues = (
	fields: FormField[],
	formData: FormValues
): FormErrors => {
	const errors: FormErrors = {};

	for ( const field of fields ) {
		const value = formData[ field.name ];

		if ( field.required && isEmptyValue( value ) ) {
			errors[ field.name ] = __( 'This field is required.', 'expose' );
			continue;
		}

		if ( isEmptyValue( value ) ) {
			continue;
		}

		const browserError = validateWithBrowserConstraints( field, value );
		if ( browserError ) {
			errors[ field.name ] = browserError;
		}
	}

	return errors;
};

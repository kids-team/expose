import type { Dispatch, ReactNode } from 'react';

export type RequestStatus = 'INIT' | 'LOADING' | 'LOADED' | 'SUCCESS' | 'ERROR';
export type FormStateStatus = 'idle' | 'loading' | 'loaded' | 'submitting' | 'success' | 'error';

export type RenderedText = {
	rendered: string;
	raw?: string;
};

export type ProductImages = {
	full?: string;
	large?: string;
	medium?: string;
	thumbnail?: string;
};

export type Product = {
	id: number;
	title: RenderedText;
	content?: RenderedText;
	excerpt?: RenderedText;
	images?: ProductImages;
	categories?: Record<string, unknown>;
};

export type CategoryMap = Record<string, string>;
export type TagMap = Record<string, string>;
export type Cart = Record<string, number>;

export type AppState = {
	products: Product[];
	status: RequestStatus;
	formStatus: RequestStatus;
	cart: Cart;
	error: string;
	categories: CategoryMap;
	tags: TagMap;
	response: string;
	wizard: {
		step: number;
		checkValidity: boolean;
	};
	selectedProduct: number;
	selectedCategory: number | string;
	selectedTags: string[];
	showOrderModal: boolean;
};

export type AppAction =
	| { type: 'SET_WIZARD_STEP'; payload: number }
	| { type: 'INCREMENT_WIZARD'; payload?: number }
	| { type: 'DECREMENT_WIZARD'; payload?: number }
	| { type: 'SET_PRODUCTS'; payload: Product[] }
	| { type: 'SET_ORDER_MODAL'; payload: boolean }
	| { type: 'SET_CATEGORIES'; payload: CategoryMap }
	| { type: 'SET_SELECTED_CATEGORY'; payload: number | string }
	| { type: 'SET_SELECTED_TAGS'; payload: string[] }
	| { type: 'SET_TAGS'; payload: TagMap }
	| { type: 'SET_STATUS'; payload: RequestStatus }
	| { type: 'SET_FORM_STATUS'; payload: RequestStatus }
	| { type: 'SET_SELECTED_PRODUCT'; payload: number }
	| { type: 'ADD_TO_CART'; payload: { id: number | string; count: number } }
	| { type: 'REMOVE_FROM_CART'; payload: { id: number | string; count?: number } }
	| { type: 'SET_RESPONSE'; payload: string }
	| { type: 'RESET' };

export type AppContextValue = {
	state: AppState;
	dispatch: Dispatch<AppAction>;
};

export type ProviderProps = {
	children: ReactNode;
};

export type FormField = {
	name: string;
	type?: string;
	required?: boolean;
	defaultValue?: unknown;
	pattern?: string;
	min?: number | string;
	max?: number | string;
};

export type FormSchema = {
	fields: FormField[];
};

export type FormValues = Record<string, unknown>;
export type FormErrors = Record<string, string>;

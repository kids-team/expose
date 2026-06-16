import type { AppAction, AppState } from '../types';

export const initialState = {
	products: [],
	status: 'INIT',
	formStatus: 'INIT',
	cart: {},
	error: '',
	categories: {},
	tags: {},
	response: '',
	wizard: {
		step: 0,
		checkValidity: false,
	},
	selectedProduct: 0,
	selectedCategory: 0,
	selectedTags: [],
	showOrderModal: false,
} satisfies AppState;

export const reducer = ( state: AppState, action: AppAction ): AppState => {
	switch ( action.type ) {
		case 'SET_WIZARD_STEP':
			state.wizard.step = action.payload;
			state.wizard.checkValidity = true;
			return { ...state };

		case 'INCREMENT_WIZARD':
			state.wizard.step = state.wizard.step + ( action.payload ? action.payload : 1 );
			state.wizard.checkValidity = true;
			return { ...state };

		case 'DECREMENT_WIZARD':
			state.wizard.step = state.wizard.step - ( action.payload ? action.payload : 1 );
			state.wizard.checkValidity = true;
			return { ...state };

		case 'SET_PRODUCTS':
			return { ...state, products: action.payload };

		case 'SET_ORDER_MODAL':
			return { ...state, showOrderModal: action.payload };

		case 'SET_CATEGORIES':
			return { ...state, categories: action.payload };

		case 'SET_SELECTED_CATEGORY':
			return { ...state, selectedCategory: action.payload };

		case 'SET_SELECTED_TAGS':
			return { ...state, selectedTags: Array.isArray( action.payload ) ? action.payload : [] };

		case 'SET_TAGS':
			return { ...state, tags: action.payload };

		case 'SET_STATUS':
			state.status = action.payload;
			return { ...state };

		case 'SET_FORM_STATUS':
			state.formStatus = action.payload;
			return { ...state };

		case 'SET_SELECTED_PRODUCT':
			return { ...state, selectedProduct: action.payload };

		case 'ADD_TO_CART':
			if ( action.payload.count === 0 ) {
				delete state.cart[ String( action.payload.id ) ];
				return { ...state };
			}

			state.cart[ String( action.payload.id ) ] = action.payload.count;
			if ( Object.keys( state.cart ).length === 0 ) {
				state.showOrderModal = false;
			}
			return { ...state };

		case 'REMOVE_FROM_CART':
			delete state.cart[ String( action.payload.id ) ];
			if ( Object.keys( state.cart ).length === 0 ) {
				state.showOrderModal = false;
			}
			return { ...state };

		case 'SET_RESPONSE':
			return { ...state, response: action.payload };

		case 'RESET':
			return { ...state, cart: {}, wizard: { step: 0, checkValidity: false }, status: 'SUCCESS' };

		default:
	}

	return { ...state };
};

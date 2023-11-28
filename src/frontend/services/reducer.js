export const initialState = {
	products: [],
	status: 'init',
	cart: {},
	error: '',
	categories: {},
	wizzard: {
		step: 0,
		checkValidity: false,
	},
	selectedProduct: 0,
	showOrderModal: false,
};

export const reducer = ( state, action ) => {
	const { type, payload } = action;

	switch ( type ) {
		case 'SET_WIZZARD_STEP':
			state.wizzard.step = payload;
			state.wizzard.checkValidity = true;
			return { ...state };

		case 'INCREMENT_WIZZARD':
			state.wizzard.step = state.wizzard.step + ( payload ? payload : 1 );
			state.wizzard.checkValidity = true;
			return { ...state };

		case 'DECREMENT_WIZZARD':
			state.wizzard.step = state.wizzard.step - ( payload ? payload : 1 );
			state.wizzard.checkValidity = true;
			return { ...state };

		case 'SET_PRODUCTS':
			return { ...state, products: payload };

		case 'SET_ORDER_MODAL':
			return { ...state, showOrderModal: payload };

		case 'SET_CATEGORIES':
			return { ...state, categories: payload };

		case 'SET_STATUS':
			state.status = payload;
			return { ...state };

		case 'SET_SELECTED_PRODUCT':
			return { ...state, selectedProduct: payload };

		case 'ADD_TO_CART':
			if ( payload.count === 0 ) {
				delete state.cart[ payload.id ];
				return { ...state };
			}
			state.cart[ payload.id ] = payload.count ?? 1;
			if ( Object.keys( state.cart ).length === 0 ) {
				state.showOrderModal = false;
			}
			return { ...state };

		case 'REMOVE_FROM_CART':
			delete state.cart[ payload.id ];
			if ( Object.keys( state.cart ).length === 0 ) {
				state.showOrderModal = false;
			}
			return { ...state };

		case 'RESET':
			console.log( 'resetting...' );
			return {};

		default:
			console.log( 'UNKNOWN ACTION', action );
	}

	return { ...state };
};

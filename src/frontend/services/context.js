import { createContext, useReducer } from '@wordpress/element';
import { initialState, reducer } from './reducer';

const AppContext = createContext( {
	state: initialState,
	dispatch: () => undefined,
} );

const AppProvider = ( { children } ) => {
	const [ state, dispatch ] = useReducer( reducer, initialState );

	return <AppContext.Provider value={ { state, dispatch } }>{ children }</AppContext.Provider>;
};

export { AppContext, AppProvider };

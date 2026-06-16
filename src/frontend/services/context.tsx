import { createContext, useReducer } from '@wordpress/element';
import { initialState, reducer } from './reducer';
import type { AppContextValue, ProviderProps } from '../types';

const AppContext = createContext<AppContextValue>( {
	state: initialState,
	dispatch: () => undefined,
} );

const AppProvider = ( { children }: ProviderProps ) => {
	const [ state, dispatch ] = useReducer( reducer, initialState );

	return <AppContext.Provider value={ { state, dispatch } }>{ children }</AppContext.Provider>;
};

export { AppContext, AppProvider };

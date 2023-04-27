import React, { createContext, Dispatch, useReducer } from "react"

type Product = {
    title: string
    price: 0
}

type InitialStateType = {
    products: Array<Product>
    cart: Array<string>
    status: "init" | "loading" | "ready"
}

const initialState: InitialStateType = {
    products: [],
    cart = Array,
    status: "init",
    error: "",
}

type Action =
    | MenuAction
    | BibleAction
    | {
          type: "SET_LANG" | "SET_ERROR" | "SET_FOOTER" | "SET_STATUS"
          payload: string
      }
    | { type: "SET_TAXONOMIES"; payload: any }

type ProviderProps = {
    children: React.ReactNode // 👈️ type children
}

const store = createContext<{
    state: InitialStateType
    dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: () => null })

const { Provider } = store

const getState = (state: any) => {
    return state
}

const StateProvider: React.FC<ProviderProps> = (props) => {
    const reducer = (state: InitialStateType, action: Action) => {
        switch (action.type) {
            case "SET_PRODUCTS":
                return { ...state, menu: action.payload }
            case "ADD_TO_CART":
                if (typeof action.payload != "string")
                    return {
                        ...state,
                        error: "Language must be a string",
                        status: "error",
                    }
                localStorage.setItem("dp_lang", action.payload ?? "")
                return { ...state, lang: action.payload }
            case "REMOVE_FROM_CART":
                return { ...state, status: action.payload }
            case "SET_FOOTER":
                return { ...state, footer: action.payload }
            case "SET_BIBLE":
                return { ...state, bible: action.payload }
            case "SET_TAXONOMIES":
                return { ...state, taxonomies: action.payload }
            case "SET_ERROR":
                return { ...state, error: action.payload }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return <Provider value={{ state, dispatch }}>{props.children}</Provider>
}

export { store, StateProvider, getState }

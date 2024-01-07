import { createContext, useReducer, ReactNode } from 'react';
import { ProductActions, ShoppingCartActions, productReducer, shoppingCartReducer } from './reducers';

export type ProductType = {
	id: number;
	name: string;
	price: number;
};

export type InitialStateType = {
	products: ProductType[];
	shoppingCart: number;
};

const initialState: InitialStateType = {
	products: [],
	shoppingCart: 0
};

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<ProductActions | ShoppingCartActions>;
}>({
	state: initialState,
	dispatch: () => null
});

const mainReducer = (state: { products: ProductType[]; shoppingCart: number }, action: ProductActions | ShoppingCartActions) => {
	const { products, shoppingCart } = state;

	return {
		products: productReducer(products, action),
		shoppingCart: shoppingCartReducer(shoppingCart, action)
	};
};

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);
	const appCtx = {
		state,
		dispatch
	};

	return <AppContext.Provider value={appCtx}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

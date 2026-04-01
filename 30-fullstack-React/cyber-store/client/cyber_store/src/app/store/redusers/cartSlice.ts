import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
const CART_STORAGE_KEY = "cartItems";

export interface ICartItem {
    id: number,
    name: string,
    price: number,
    img: string,
    quantity: number
};


interface IInitialState {
    items: ICartItem[];
    totalItems: number,
    totalPrice: number,
};

const saveCartToLocalStorage = (items: ICartItem[]) => {
    try {
        if(items.length > 0){
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        } else {
            localStorage.removeItem(CART_STORAGE_KEY);
        }
    } catch (e) {
        console.error(e);
    }
};

const getCartToLocalStorage = (): ICartItem[] => {
    try {
        const getItems = localStorage.getItem(CART_STORAGE_KEY);

        if(getItems) {
            return getItems ?  JSON.parse(getItems) : [];
        }
        return []
    } catch (e) {
        console.error(e);
        return [];
    }
}

const initialState: IInitialState = {
    items: getCartToLocalStorage(),
    totalItems: 0,
    totalPrice: 0,
};

export interface IAddToCartPayload {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    quantity: number
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const {id, name, img, price, quantity = 1} = action.payload;

            const existingItem = state.items.find((it) => it.id === id);

            if(existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    img,
                    quantity,
                });
            };

            state.totalItems = state.items.reduce((acc, item) => acc + item.quantity ,0);
            state.totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity) ,0);
            saveCartToLocalStorage(state.items);
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            state.items = state.items.filter((it) => it.id !== id);

            state.totalItems = state.items.reduce((acc, item) => acc + item.quantity ,0);
            state.totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity) ,0);
            saveCartToLocalStorage(state.items);
        },
        incrementItem: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            const findItem = state.items.find((it) => it.id === id);
            if(findItem) {
                findItem.quantity += 1;

                state.totalItems = state.items.reduce((acc, item) => acc + item.quantity ,0);
                state.totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity) ,0);
                saveCartToLocalStorage(state.items);
            };
        },
        decrementItem: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            const findItem = state.items.find((item) => item.id === id);

            if(findItem) {
                if(findItem.quantity === 1) {
                    state.items = state.items.filter(it => it.id !== id);
                } else {
                    findItem.quantity -= 1;
                }

                state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
                state.totalPrice = state.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
                saveCartToLocalStorage(state.items);
            };
        },
        setCart: (state, action: PayloadAction<ICartItem[]>) => {
            state.items = action.payload;
            saveCartToLocalStorage(state.items);
        }, // если нужно гдето просто передать для сохранения из других компонентов
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
            localStorage.removeItem(CART_STORAGE_KEY);
        }
    }
});

export const {addToCart, removeItem, incrementItem, decrementItem, clearCart, setCart} = cartSlice.actions;
export  default cartSlice.reducer
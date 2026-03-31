import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IDevice {
    id: number,
    name: string,
    price: number,
    img: string,
    quantity: number;
}

interface IInitialState {
    items: IDevice[];
    isLoading: boolean,
    error: null | string,
    totalItems: number,
    totalPrice: number,
}

const initialState: IInitialState = {
    items: [],
    isLoading: true,
    error: null,
    totalItems: 0,
    totalPrice: 0,
}

interface AddToCartPayload {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    quantity: number
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
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
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            state.items = state.items.filter((it) => it.id !== id);

            state.totalItems = state.items.reduce((acc, item) => acc + item.quantity ,0);
            state.totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity) ,0);
        },
        incrementItem: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            const findItem = state.items.find((it) => it.id === id);
            if(findItem) {
                findItem.quantity += 1;

                state.totalItems = state.items.reduce((acc, item) => acc + item.quantity ,0);
                state.totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity) ,0);
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
            };
        },

        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        }
    }
});

export const {addToCart, removeItem, incrementItem, decrementItem, clearCart} = cartSlice.actions;
export  default cartSlice.reducer
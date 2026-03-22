import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IDevices {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    quantity: number;
}

interface IInitialState {
    items: IDevices[];
    isLoading: boolean,
    error: null | string,
    totalItems: number,
    totalPages: number,
}

const initialState: IInitialState = {
    items: [],
    isLoading: true,
    error: null,
    totalItems: 0,
    totalPages: 0,
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
            const {id, name, img, price, rating, quantity = 1} = action.payload;

            const findDevice = initialState.items.find((item) => item.id === id);

            if(findDevice) {
                findDevice.quantity += quantity;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    rating,
                    img,
                    quantity,
                });
            }

            state.items.push(action.payload)
        }
    }
});

export const {addToCart} = cartSlice.actions;
export  default cartSlice.reducer
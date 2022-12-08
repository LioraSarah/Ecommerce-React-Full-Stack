import { createSlice } from '@reduxjs/toolkit'; 

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: []
    },
    reducers: {
        loadCart(state, action) {
            return(action.payload);
        },
        addItem(state, action) {
            console.log(action.payload)
            state.items.push(action.payload);
        },
        removeItem(state, action) {
            const index = state.items.indexOf(action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
});


export const selectCartItems = (state) => state.cart.items;
export const { loadCart, addItem, removeItem } = cartSlice.actions;

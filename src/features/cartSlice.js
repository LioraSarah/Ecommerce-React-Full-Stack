import { createSlice } from '@reduxjs/toolkit'; 

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: []
    },
    reducers: {
        addItem(state, action) {
            console.log(action.payload)
            state.items.push(action.payload);
        },
        // removeItem(state, action) {
        //     state.items.pop(action.payload);
        // }
    }
});


export const selectCartItems = (state) => state.cart.items;
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
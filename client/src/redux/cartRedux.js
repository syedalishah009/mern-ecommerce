import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // const productIndex = state.cart.findIndex((item)=>
      // item.id === action.payload.products._id);
      // if(productIndex >= 0){
      //   state.cart[productIndex].quantity += 1;
      // } else{
      state.quantity += 1; // its cart quantity number
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; // here is the quantityy of product
      console.log(action.payload.price);
      // }
    },
    removeProduct(state, action) {
  
      state.quantity -= 1;
      const productId = action.payload;
      state.products = state.products.filter((product)=>
        product._id !== productId
      );
  },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
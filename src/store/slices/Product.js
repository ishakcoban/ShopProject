import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    add(state, action) {
      state.products.push(action.payload);
    },
    remove(state, action) {
      const newProduct = []
      state.products.map(e=>{
        if(e.id != action.payload){
          newProduct.push(e)
        }
      })
      state.products = []
      newProduct.map(e=>{
        if(e.id != action.payload){
          state.products.push(e)
        }
      })
    }
  },
});
export const ProductActions = ProductSlice.actions;
export default ProductSlice;
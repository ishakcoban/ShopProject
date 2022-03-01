import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/Product";
import PopupReducer from "./slices/Popup";


const store = configureStore({
    reducer:{product :ProductReducer.reducer,popup :PopupReducer.reducer} 
})

export default store;
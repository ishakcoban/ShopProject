import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupState: false
};

const PopupSlice = createSlice({
  name: "popupState",
  initialState,
  reducers: {
    changeState(state) {
      state.popupState = !state.popupState;
    },
  },
});
export const PopupActions = PopupSlice.actions;
export default PopupSlice;
import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  isActive: boolean;
}

const initialState: AlertState = {
  isActive: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state: AlertState) => {
      state.isActive = true;
    },
    closeAlert: (state: AlertState) => {
      state.isActive = false;
    },
  },
});

export const { showAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert-slice";
import rangeSlice from "./slices/range-slice";
import passwordSlice from "./slices/password-slice";
import checkboxesSlice from "./slices/checkboxes-slice";
import idLastSelectedCheckboxSlice from "./slices/id-last-selected-checkbox-slice";

export const store = configureStore({
  reducer: {
    alert: alertSlice,
    range: rangeSlice,
    password: passwordSlice,
    checkboxes: checkboxesSlice,
    idLastSelectedCheckbox: idLastSelectedCheckboxSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import rangeSlice from "./slices/range-slice";
import checkboxesSlice from "./slices/checkboxes-slice";
import idLastSelectedCheckboxSlice from "./slices/id-last-selected-checkbox-slice";

export const store = configureStore({
  reducer: {
    range: rangeSlice,
    checkboxes: checkboxesSlice,
    idLastSelectedCheckbox: idLastSelectedCheckboxSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

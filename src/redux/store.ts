import { configureStore } from "@reduxjs/toolkit";
import checkboxesSlice from "./slices/checkboxes-slice";
import rangeSlice from "./slices/range-slice";

export const store = configureStore({
  reducer: { checkboxes: checkboxesSlice, range: rangeSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import checkboxesSlice from "./slices/checkboxes-slice";

export const store = configureStore({
  reducer: { checkboxes: checkboxesSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

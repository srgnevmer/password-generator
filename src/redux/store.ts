import { configureStore } from "@reduxjs/toolkit";
import passwordConfigSlice from "./reducers/passwordConfigSlice";
import modalSlice from "./reducers/modalSlice";

export const store = configureStore({
  reducer: { passwordConfig: passwordConfigSlice, modal: modalSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

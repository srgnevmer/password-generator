import { configureStore } from "@reduxjs/toolkit";
import passwordConfigSlice from "./reducers/passwordConfigSlice";

export const store = configureStore({
  reducer: { passwordConfig: passwordConfigSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

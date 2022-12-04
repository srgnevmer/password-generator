import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PasswordState {
  generatedPassword: string;
}

const initialState: PasswordState = {
  generatedPassword: "",
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state: PasswordState, action: PayloadAction<string>) => {
      state.generatedPassword = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;
export default passwordSlice.reducer;

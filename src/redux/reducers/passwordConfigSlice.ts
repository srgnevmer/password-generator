import { PasswordConfig } from "../../types/";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: PasswordConfig = {
  length: 15,
  characters: {
    upperCase: true,
    lowerCase: false,
    numbers: true,
    brackets: false,
    symbols: false,
  },
};

const passwordConfigSlice = createSlice({
  name: "password-config",
  initialState,
  reducers: {
    changeCharactersValue: (
      state: PasswordConfig,
      actions: PayloadAction<[string, boolean]>
    ) => {
      const [key, value] = actions.payload;
      state.characters[key as keyof typeof initialState.characters] = value;
    },
    changeLengthValue: (
      state: PasswordConfig,
      actions: PayloadAction<number>
    ) => {
      state.length = actions.payload;
    },
  },
});

export const { changeCharactersValue, changeLengthValue } =
  passwordConfigSlice.actions;
export default passwordConfigSlice.reducer;

import { Keys } from "../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PasswordConfigState {
  characters: Record<Keys, boolean>;
  length: number;
}

export const initialState: PasswordConfigState = {
  characters: {
    upperCase: true,
    lowerCase: false,
    numbers: true,
    brackets: false,
    symbols: false,
  },
  length: 20,
};

const passwordConfigSlice = createSlice({
  name: "password-config",
  initialState,
  reducers: {
    changeCharactersValue: (
      state: PasswordConfigState,
      actions: PayloadAction<[string, boolean]>
    ) => {
      const [key, value] = actions.payload;
      state.characters[key as keyof typeof initialState.characters] = value;
    },
    changeLengthValue: (
      state: PasswordConfigState,
      actions: PayloadAction<number>
    ) => {
      state.length = actions.payload;
    },
  },
});

export const { changeCharactersValue, changeLengthValue } =
  passwordConfigSlice.actions;
export default passwordConfigSlice.reducer;

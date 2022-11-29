import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckboxId } from "../../types";

interface CheckboxesState {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  brackets: boolean;
}

const initialState: CheckboxesState = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
  brackets: false,
};

const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState,
  reducers: {
    activate: (state: CheckboxesState, action: PayloadAction<CheckboxId>) => {
      const target: CheckboxId = action.payload;
      state[target] = true;
    },
    deactivate: (state: CheckboxesState, action: PayloadAction<CheckboxId>) => {
      const target: CheckboxId = action.payload;
      state[target] = false;
    },
  },
});

export const { activate, deactivate } = checkboxesSlice.actions;
export default checkboxesSlice.reducer;

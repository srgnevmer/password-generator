import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "../../constants";

export interface RangeState {
  length: number;
}

const initialState: RangeState = {
  length: 15,
};

const rangeSlice = createSlice({
  name: "range",
  initialState,
  reducers: {
    setLength: (state: RangeState, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    lengthIncrement: (state: RangeState) => {
      if (state.length === MAX_PASSWORD_LENGTH) return;
      state.length += 1;
    },
    lengthDecrement: (state: RangeState) => {
      if (state.length === MIN_PASSWORD_LENGTH) return;
      state.length -= 1;
    },
  },
});

export const { setLength, lengthIncrement, lengthDecrement } =
  rangeSlice.actions;
export default rangeSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      state.length += 1;
    },
    lengthDecrement: (state: RangeState) => {
      state.length -= 1;
    },
  },
});

export const { setLength, lengthIncrement, lengthDecrement } =
  rangeSlice.actions;
export default rangeSlice.reducer;

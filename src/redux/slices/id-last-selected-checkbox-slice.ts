import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckboxId } from "../../types";

interface IdLastSelectedCheckboxState {
  id: CheckboxId | null;
}

const initialState: IdLastSelectedCheckboxState = {
  id: null,
};

const idLastSelectedCheckboxSlice = createSlice({
  name: "id-last-selected-checkbox",
  initialState,
  reducers: {
    saveId: (
      state: IdLastSelectedCheckboxState,
      action: PayloadAction<CheckboxId | null>
    ) => {
      state.id = action.payload;
    },
  },
});

export const { saveId } = idLastSelectedCheckboxSlice.actions;
export default idLastSelectedCheckboxSlice.reducer;

import { CheckboxId, CheckboxesState } from "../types";

export const getIdSelectedCheckbox = (
  checkboxesList: CheckboxesState
): CheckboxId | void => {
  for (const [key, value] of Object.entries(checkboxesList)) {
    if (value) {
      return key as keyof typeof checkboxesList;
    }
  }
};

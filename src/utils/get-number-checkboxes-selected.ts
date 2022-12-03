import { CheckboxesState } from "../types";

export const getNumberCheckboxesSelected = (
  checkboxesList: CheckboxesState
): number => {
  let numberSelectedCheckboxes: number = 0;
  for (const value of Object.values(checkboxesList)) {
    if (value) numberSelectedCheckboxes += 1;
  }
  return numberSelectedCheckboxes;
};

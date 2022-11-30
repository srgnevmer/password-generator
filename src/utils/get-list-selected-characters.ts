import { CheckboxesState } from "../types";
import { charactersToCreatePassword } from "../constants";

export const getListSelectedCharacters = (
  selectedCheckboxes: CheckboxesState
): (string[] | number[])[] => {
  const selectedCharacters: (string[] | number[])[] = [];

  for (let [key, value] of Object.entries(selectedCheckboxes)) {
    if (value) {
      selectedCharacters.push(
        charactersToCreatePassword[key as keyof CheckboxesState]
      );
    }
  }

  return selectedCharacters;
};

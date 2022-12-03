import { CheckboxesState } from "../types";
import { CHARACTERS_TO_CREATE_PASSWORD } from "../constants";

export const getListSelectedCharacters = (
  selectedCheckboxes: CheckboxesState
): (string[] | number[])[] => {
  const selectedCharacters: (string[] | number[])[] = [];

  for (const [key, value] of Object.entries(selectedCheckboxes)) {
    if (value) {
      selectedCharacters.push(
        CHARACTERS_TO_CREATE_PASSWORD[key as keyof CheckboxesState]
      );
    }
  }

  return selectedCharacters;
};

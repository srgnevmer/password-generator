import { CheckboxesState } from "../types";
import { getListSelectedCharacters, getRandomNumber } from "./index";

export const getGeneratedPassword = (
  selectedCheckboxes: CheckboxesState,
  passwordLength: number
): string => {
  let password: string = "";
  const selectedCharacters: (string[] | number[])[] =
    getListSelectedCharacters(selectedCheckboxes);

  for (let index: number = 0; index < passwordLength; index += 1) {
    const characterArrIndex: number = getRandomNumber(
      selectedCharacters.length
    );
    const characterIndex: number = getRandomNumber(
      selectedCharacters[characterArrIndex].length
    );
    const randomCharacter: string | number =
      selectedCharacters[characterArrIndex][characterIndex];
    password += randomCharacter;
  }

  return password;
};

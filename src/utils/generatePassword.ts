import { Password } from "../types";
import { getSelectedValues } from "./getSelectedValues";
import { getRandomSymbol } from "./getRandomSymbol";
import { getRandomNumber } from "./getRandomNumber";

export const generatePassword = (passwordConfig: Password): string => {
  const { length } = passwordConfig;
  const password: (number | string)[] = [];

  const selectedValues = getSelectedValues(passwordConfig);

  for (let index: number = 0; index < length; index += 1) {
    const randomNumber: number = getRandomNumber(selectedValues.length);
    const randomSymbol: number | string = getRandomSymbol(
      selectedValues[randomNumber]
    );
    password.push(randomSymbol);
  }

  return password.join("");
};

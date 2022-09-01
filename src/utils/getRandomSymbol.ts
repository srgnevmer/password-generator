import { valuesForPassword } from "../constants";
import { getRandomNumber } from "./getRandomNumber";

export const getRandomSymbol = (selectedKey: string): string | number => {
  const heap = valuesForPassword;
  const key = selectedKey as keyof typeof valuesForPassword;
  const randomNumber: number = getRandomNumber(heap[key].length);

  return heap[key][randomNumber];
};

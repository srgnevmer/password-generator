import { getInputs } from "./getInputs";

export const getNumberSelectedCheckboxes = (list: HTMLCollection): number => {
  const inputs: Element[] = getInputs(list);
  let quantity: number = 0;

  for (let index: number = 0; index < inputs.length; index += 1) {
    const target = inputs[index] as HTMLInputElement;
    if (target.checked) quantity += 1;
  }

  return quantity;
};

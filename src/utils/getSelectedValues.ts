import { Password } from "../types";

export const getSelectedValues = (passwordConfig: Password): string[] => {
  const selectedFields = Object.entries(passwordConfig).filter(
    (field) => field[1] === true
  );

  return selectedFields.map((field) => field[0]);
};

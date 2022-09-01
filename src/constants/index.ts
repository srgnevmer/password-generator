const letters: string = "abcdefghijklmnopqrstuvwxyz";
const lowerCase: string[] = letters.split("");
export const upperCase: string[] = lowerCase.map((letter) =>
  letter.toUpperCase()
);
const brackets: string[] = ["(", ")", "[", "]", "{", "}", "<", ">"];
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols: string[] = [
  "+",
  "-",
  "*",
  "/",
  "&",
  "~",
  "@",
  "$",
  "%",
  "!",
  "?",
];

export const valuesForPassword = {
  lowerCase: [...lowerCase],
  upperCase: [...upperCase],
  brackets: [...brackets],
  numbers: [...numbers],
  symbols: [...symbols],
};

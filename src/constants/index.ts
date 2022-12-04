import { CharactersToCreatePass } from "../types";

export const MIN_WINDOW_WIDTH: number = 1024;

export const REPOSITORY_LINK: string =
  "https://github.com/srgnevmer/password-generator";

export const VERY_WEAK: number = 4;

export const WEAK: number = 7;

export const GOOD: number = 9;

export const STRONG: number = 11;

export const VERY_STRONG: number = 12;

export const MAX_LENGTH: number = 38;

export const MIN_PASSWORD_LENGTH: number = 1;

export const MAX_PASSWORD_LENGTH: number = 50;

export const MIN_NUMBER_SELECTED_CHECKBOXES: number = 1;

export const DELAY_BEFORE_ALERT_CLOSE: number = 3000;

const NUMBERS: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SYMBOLS: string[] = ["!", "?", "@", "#", "$", "%", "&"];

const BRACKETS: string[] = ["(", ")", "[", "]", "{", "}"];

const UPPERCASE: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LOWERCASE: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const CHARACTERS_TO_CREATE_PASSWORD: CharactersToCreatePass = {
  uppercase: UPPERCASE,
  lowercase: LOWERCASE,
  numbers: NUMBERS,
  symbols: SYMBOLS,
  brackets: BRACKETS,
};

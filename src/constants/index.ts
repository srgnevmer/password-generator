import { CharactersToCreatePass } from "../types";

export const MIN_WINDOW_WIDTH: number = 1024;

export const DELAY: number = 400;

export const REPOSITORY_LINK: string =
  "https://github.com/srgnevmer/password-generator";

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

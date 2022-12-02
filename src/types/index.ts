export type CheckboxId =
  | "uppercase"
  | "lowercase"
  | "numbers"
  | "symbols"
  | "brackets";

export interface CheckboxesState {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  brackets: boolean;
}

export interface CharactersToCreatePass {
  uppercase: string[];
  lowercase: string[];
  numbers: number[];
  symbols: string[];
  brackets: string[];
}

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

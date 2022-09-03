type Length = {
  length: number;
};

export type Keys =
  | "upperCase"
  | "lowerCase"
  | "numbers"
  | "brackets"
  | "symbols";

export type Password = Length & Record<Keys, boolean>;

export interface PasswordConfig {
  length: number;
  characters: Record<Keys, boolean>;
}

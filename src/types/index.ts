type Length = {
  length: number;
};

type Keys = "upperCase" | "lowerCase" | "numbers" | "brackets" | "symbols";

export type Password = Length & Record<Keys, boolean>;

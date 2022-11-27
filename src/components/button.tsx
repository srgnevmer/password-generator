import { FC } from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  text: string;
  type: ButtonType;
}

export const Button: FC<ButtonProps> = ({ text, type }) => {
  return (
    <button
      className={`${type} text-white font-semibold rounded-xl shrink-0 bg-blue-600
    hover:bg-blue-700 active:bg-blue-600 transition duration-100`}
    >
      {text}
    </button>
  );
};

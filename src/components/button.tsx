import { FC, memo } from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  text: string;
  type: ButtonType;
  func?: () => void;
}

export const Button: FC<ButtonProps> = memo(({ text, type, func }) => {
  return (
    <button
      onClick={func}
      className={`${type} text-white font-semibold rounded-xl shrink-0 bg-blue-600
    hover:bg-blue-700 active:bg-blue-600 transition duration-100`}
    >
      {text}
    </button>
  );
});

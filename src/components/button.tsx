import { FC } from "react";

interface ButtonProps {
  width: number;
  height: number;
  text: string;
  callback: () => void;
}

export const Button: FC<ButtonProps> = ({ width, height, text, callback }) => {
  return (
    <button
      onClick={callback}
      className="bg-indigo-600 rounded-lg 
      text-xl text-white select-none
      outline outline-2 outline-transparent
    active:outline-indigo-300 lg:hover:bg-indigo-800 active:text-slate-300 transition duration-200"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </button>
  );
};

import { FC } from "react";
import { SvgSelector } from "./index";

interface CheckboxProps {
  id: string;
  text: string;
}

export const Checkbox: FC<CheckboxProps> = ({ id, text }) => {
  return (
    <label
      htmlFor={id}
      className="w-max flex flex-row-reverse items-center 
      select-none cursor-pointer"
    >
      <span className="text-xl font-semibold text-white ml-2 select-none">
        {text}
      </span>
      <input
        type="checkbox"
        id={id}
        className="w-10 h-10 border-2 rounded-xl bg-slate-800 cursor-pointer 
        focus:ring-offset-transparent focus:ring-transparent"
      />
    </label>
  );
};

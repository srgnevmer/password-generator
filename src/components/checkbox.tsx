import { FC } from "react";
import { CheckboxId } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import { activate, deactivate } from "../redux/slices/checkboxes-slice";

interface CheckboxProps {
  id: CheckboxId;
  text: string;
}

export const Checkbox: FC<CheckboxProps> = ({ id, text }) => {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector<boolean>((state) => state.checkboxes[id]);

  const activateOrDeactivate = (): void => {
    if (isActive) {
      dispatch(deactivate(id));
    } else {
      dispatch(activate(id));
    }
  };

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
        id={id}
        type="checkbox"
        checked={isActive}
        onChange={activateOrDeactivate}
        className="w-10 h-10 border-2 rounded-xl bg-slate-800 cursor-pointer 
        focus:ring-offset-transparent focus:ring-transparent"
      />
    </label>
  );
};

import { FC, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../redux/typedHooks";
import { changeCharactersValue } from "../redux/reducers/passwordConfigSlice";
import { initialState } from "../redux/reducers/passwordConfigSlice";

interface CheckboxProps {
  id: string;
  text: string;
}

export const Checkbox: FC<CheckboxProps> = ({ id, text }) => {
  const dispatch = useAppDispatch();
  const isChecked = useAppSelector<boolean>(
    (state) =>
      state.passwordConfig.characters[
        id as keyof typeof initialState.characters
      ]
  );

  const handleClick = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeCharactersValue([id, event.target.checked]));
  };

  return (
    <div className="w-16 h-7 flex items-center">
      <input
        id={id}
        onChange={handleClick}
        type="checkbox"
        checked={isChecked}
        className="w-5 h-5 rounded mx-2 border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300
        focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
      />
      <label
        htmlFor={id}
        className="select-none text-lg text-slate-200 cursor-pointer"
      >
        {text}
      </label>
    </div>
  );
};

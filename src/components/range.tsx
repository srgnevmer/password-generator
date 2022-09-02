import { FC, ChangeEvent } from "react";
import { debounce } from "lodash";
import { useAppDispatch, useAppSelector } from "../redux/typedHooks";
import { changeLengthValue } from "../redux/reducers/passwordConfigSlice";

export const Range: FC = () => {
  const dispatch = useAppDispatch();
  const sliderValue = String(
    useAppSelector<number>((state) => state.passwordConfig.length)
  );

  const updateRange = debounce((range: number): void => {
    dispatch(changeLengthValue(range));
  }, 200);

  const changeLength = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: number = Number(event.target.value);
    updateRange(value);
  };

  return (
    <div className="flex flex-col mb-3 sm:mb-0">
      <p className="text-slate-300 font-semibold sm:text-lg flex select-none">
        Password length:
        <span className="ml-2 block w-7">{sliderValue}</span>
      </p>
      <input
        type="range"
        min="1"
        max="50"
        defaultValue={20}
        onChange={changeLength}
        className="w-40 h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

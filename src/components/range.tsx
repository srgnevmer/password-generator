import { FC, useCallback, ChangeEvent } from "react";
import { Button } from "./index";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import {
  setLength,
  lengthIncrement,
  lengthDecrement,
} from "../redux/slices/range-slice";
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "../constants";

export const Range: FC = () => {
  const dispatch = useAppDispatch();
  const passwordLength = useAppSelector<number>((state) => state.range.length);

  const setRangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const currentValue: number = Number(event.target.value);
    dispatch(setLength(currentValue));
  };

  const decrement = useCallback((): void => {
    dispatch(lengthDecrement());
  }, []);

  const increment = useCallback((): void => {
    dispatch(lengthIncrement());
  }, []);

  return (
    <div className="w-full h-16 flex justify-center items-center mb-2">
      <Button text="-" type="primary" func={decrement} />
      <input
        id="range"
        type="range"
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        value={passwordLength}
        onChange={setRangeValue}
        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer range-lg mx-4"
      />
      <Button text="+" type="primary" func={increment} />
    </div>
  );
};

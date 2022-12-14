import { FC, ChangeEvent, memo, useMemo } from "react";
import { IconButton, SvgSelector } from "./index";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import {
  setLength,
  lengthIncrement,
  lengthDecrement,
} from "../redux/slices/range-slice";
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "../constants";

export const Range: FC = memo(() => {
  const dispatch = useAppDispatch();
  const passwordLength = useAppSelector<number>((state) => state.range.length);

  const setRangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const currentValue: number = Number(event.target.value);
    dispatch(setLength(currentValue));
  };

  const decrement = (): void => {
    if (passwordLength === MIN_PASSWORD_LENGTH) return;
    dispatch(lengthDecrement());
  };

  const increment = (): void => {
    if (passwordLength === MAX_PASSWORD_LENGTH) return;
    dispatch(lengthIncrement());
  };

  const incrementIcon = useMemo((): JSX.Element => {
    return <SvgSelector id="plus" />;
  }, []);

  const decrementIcon = useMemo((): JSX.Element => {
    return <SvgSelector id="minus" />;
  }, []);

  return (
    <div className="w-full h-16 flex justify-center items-center mb-2">
      <IconButton func={decrement} icon={decrementIcon} />
      <input
        id="range"
        type="range"
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        value={passwordLength}
        onChange={setRangeValue}
        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer range-lg mx-4"
      />
      <IconButton func={increment} icon={incrementIcon} />
    </div>
  );
});

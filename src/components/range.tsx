import { FC, ChangeEvent } from "react";
import { Button } from "./index";

export const Range: FC = () => {
  const getRangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };

  return (
    <div className="w-full h-16 flex justify-center items-center mb-2">
      <Button text="-" type="primary" />
      <input
        id="range"
        type="range"
        max="50"
        onChange={getRangeValue}
        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer range-lg mx-4"
      />
      <Button text="+" type="primary" />
    </div>
  );
};

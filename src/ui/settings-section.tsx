import { FC } from "react";
import { Checkbox, Range, Button } from "../components";

export const SettingsSection: FC = () => {
  return (
    <div
      className="w-full max-w-4xl bg-slate-700 rounded-xl
      flex flex-col px-8 py-5"
    >
      <div
        className="w-full text-2xl text-white font-semibold 
        border-b-2 border-white flex items-end mb-4"
      >
        Customize your password
      </div>
      <div className="flex justify-around">
        <div className="w-[400px] grid grid-cols-2 grid-rows-3">
          <Checkbox id="checkbox1" text="UPPERCASE" />
          <Checkbox id="checkbox2" text="LOWERCASE" />
          <Checkbox id="checkbox3" text="NUMBERS" />
          <Checkbox id="checkbox4" text="SYMBOLS" />
          <Checkbox id="checkbox5" text="BRACKETS" />
        </div>
        <div className="w-[400px]">
          <p className="text-2xl text-white font-semibold mb-4">
            Password length: 20
          </p>
          <Range />
          <Button text="Copy the password" type="secondary" />
        </div>
      </div>
    </div>
  );
};

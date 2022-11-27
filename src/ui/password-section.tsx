import { FC } from "react";
import { SvgSelector, Badge } from "../components";

export const PasswordSection: FC = () => {
  return (
    <div
      className="w-full max-w-4xl h-24 bg-slate-700 rounded-xl mb-6
      flex items-center"
    >
      <div className="w-full max-w-2xl h-full flex items-center px-8">
        <p className="text-2xl text-white font-semibold">
          Tt1skQVrsvfRIOh6hlNRB2PdV
        </p>
      </div>
      <div className="flex justify-around items-center grow">
        <Badge />
        <SvgSelector id="refresh" />
      </div>
    </div>
  );
};

import { FC, useState, useEffect, useMemo, useCallback } from "react";
import { CheckboxesState } from "../types";
import { MAX_LENGTH } from "../constants";
import { IconButton, SvgSelector, Badge } from "../components";
import { useAppSelector } from "../redux/typed-hooks";
import { getGeneratedPassword, trimStr } from "../utils";

export const PasswordSection: FC = () => {
  const [generatePass, setGeneratePass] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const selectedCheckboxes = useAppSelector<CheckboxesState>(
    (state) => state.checkboxes
  );
  const passwordLength = useAppSelector<number>((state) => state.range.length);

  useEffect(() => {
    setPassword(getGeneratedPassword(selectedCheckboxes, passwordLength));
  }, [generatePass, selectedCheckboxes, passwordLength]);

  const refreshIcon = useMemo((): JSX.Element => {
    return <SvgSelector id="refresh" />;
  }, []);

  const generatePassword = useCallback((): void => {
    setGeneratePass((prevValue: number) => prevValue + 1);
  }, []);

  return (
    <div
      className="w-full max-w-4xl h-24 bg-slate-700 
      rounded-xl mb-6 flex items-center select-none"
    >
      <div className="w-full max-w-2xl h-full flex items-center px-8">
        <p className="text-2xl text-white font-semibold">
          {trimStr(password, MAX_LENGTH)}
        </p>
      </div>
      <div className="flex justify-around items-center grow">
        <Badge />
        <IconButton icon={refreshIcon} func={generatePassword} />
      </div>
    </div>
  );
};

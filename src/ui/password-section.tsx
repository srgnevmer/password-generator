import { FC, useEffect, useMemo, useCallback } from "react";
import { CheckboxesState } from "../types";
import { MAX_LENGTH } from "../constants";
import { IconButton, SvgSelector, Badge } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import { setPassword } from "../redux/slices/password-slice";
import { getGeneratedPassword, trimStr } from "../utils";

export const PasswordSection: FC = () => {
  const dispatch = useAppDispatch();
  const password = useAppSelector<string>(
    (state) => state.password.generatedPassword
  );
  const selectedCheckboxes = useAppSelector<CheckboxesState>(
    (state) => state.checkboxes
  );
  const passwordLength = useAppSelector<number>((state) => state.range.length);

  const refreshIcon = useMemo((): JSX.Element => {
    return <SvgSelector id="refresh" />;
  }, []);

  const getPassword = (): string => {
    return getGeneratedPassword(selectedCheckboxes, passwordLength);
  };

  const newPasswordGenerated = useCallback((): void => {
    dispatch(setPassword(getPassword()));
  }, [selectedCheckboxes, passwordLength]);

  useEffect(() => {
    dispatch(setPassword(getPassword()));
  }, [selectedCheckboxes, passwordLength]);

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
        <IconButton icon={refreshIcon} func={newPasswordGenerated} />
      </div>
    </div>
  );
};

import { FC, useEffect, useCallback } from "react";
import { PasswordLength } from "./index";
import { Checkbox, Range, Button } from "../components";
import { CheckboxId, CheckboxesState } from "../types";
import {
  MIN_NUMBER_SELECTED_CHECKBOXES,
  DELAY_BEFORE_ALERT_CLOSE,
} from "../constants";
import { useAppDispatch, useAppSelector } from "../redux/typed-hooks";
import { showAlert, closeAlert } from "../redux/slices/alert-slice";
import { saveId } from "../redux/slices/id-last-selected-checkbox-slice";
import { getNumberCheckboxesSelected, getIdSelectedCheckbox } from "../utils";

export const SettingsSection: FC = () => {
  const dispatch = useAppDispatch();
  const alertState = useAppSelector<boolean>((state) => state.alert.isActive);
  const password = useAppSelector<string>(
    (state) => state.password.generatedPassword
  );
  const selectedCheckboxes = useAppSelector<CheckboxesState>(
    (state) => state.checkboxes
  );
  const idLastSelectedCheckbox = useAppSelector<CheckboxId | null>(
    (state) => state.idLastSelectedCheckbox.id
  );

  const showAndCloseAlert = (): void => {
    if (alertState) return;

    dispatch(showAlert());
    setTimeout(() => {
      dispatch(closeAlert());
    }, DELAY_BEFORE_ALERT_CLOSE);
  };

  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    showAndCloseAlert();
  }, [alertState, password]);

  useEffect(() => {
    const quantity: number = getNumberCheckboxesSelected(selectedCheckboxes);

    if (quantity === MIN_NUMBER_SELECTED_CHECKBOXES) {
      const idSelectedCheckbox: CheckboxId =
        getIdSelectedCheckbox(selectedCheckboxes)!;
      dispatch(saveId(idSelectedCheckbox));
      const target = document.getElementById(
        idSelectedCheckbox
      ) as HTMLInputElement;
      target.setAttribute("disabled", "");
    }

    if (quantity > MIN_NUMBER_SELECTED_CHECKBOXES && idLastSelectedCheckbox) {
      const target = document.getElementById(
        idLastSelectedCheckbox
      ) as HTMLInputElement;
      target.removeAttribute("disabled");
      dispatch(saveId(null));
    }
  }, [selectedCheckboxes]);

  return (
    <div
      className="w-full max-w-4xl bg-slate-700 rounded-xl
      flex flex-col px-8 py-5"
    >
      <div
        className="w-full text-2xl text-white font-semibold 
        border-b-2 border-white flex items-end mb-4 pb-1"
      >
        Customize your password
      </div>
      <div className="flex justify-around">
        <div className="w-[400px] grid grid-cols-2 grid-rows-3">
          <Checkbox id="uppercase" text="Uppercase" />
          <Checkbox id="lowercase" text="Lowercase" />
          <Checkbox id="numbers" text="Numbers" />
          <Checkbox id="symbols" text="Symbols" />
          <Checkbox id="brackets" text="Brackets" />
        </div>
        <div className="w-[400px]">
          <PasswordLength />
          <Range />
          <Button
            text="Copy the password"
            type="secondary"
            func={copyPassword}
          />
        </div>
      </div>
    </div>
  );
};

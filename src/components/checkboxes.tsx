import { FC, useRef, useEffect, useState } from "react";
import { Checkbox } from "./checkbox";
import { getInputs } from "../utils/checkboxes/getInputs";
import { getNumberSelectedCheckboxes } from "../utils/checkboxes/getNumberSelectedCheckboxes";

export const Checkboxes: FC = () => {
  const ref = useRef(null);
  const [id, setId] = useState<string | null>(null);
  const [numberSelectedInputs, setNumberSelectedInputs] = useState<number>(0);

  useEffect(() => {
    const list: HTMLDivElement = document.getElementById(
      "list"
    ) as HTMLDivElement;
    setNumberSelectedInputs(getNumberSelectedCheckboxes(list.children));
  });

  useEffect(() => {
    const list: HTMLDivElement = document.getElementById(
      "list"
    ) as HTMLDivElement;
    const inputs: Element[] = getInputs(list.children);

    if (numberSelectedInputs === 1) {
      for (let index: number = 0; index < inputs.length; index += 1) {
        const target = inputs[index] as HTMLInputElement;
        if (target.checked) {
          setId(target.id);
          target.setAttribute("disabled", "true");
        }
      }
    }

    if (numberSelectedInputs === 2 && id !== null) {
      for (let index: number = 0; index < inputs.length; index += 1) {
        const target = inputs[index] as HTMLInputElement;
        if (target.id === id) {
          target.removeAttribute("disabled");
          setId(null);
        }
      }
    }
  }, [numberSelectedInputs]);

  return (
    <div
      id="list"
      ref={ref}
      className="grid grid-cols-3 sm:flex sm:w-4/6 sm:justify-around"
    >
      <Checkbox id="upperCase" text="ABC" />
      <Checkbox id="lowerCase" text="abc" />
      <Checkbox id="numbers" text="012" />
      <Checkbox id="brackets" text="({[" />
      <Checkbox id="symbols" text="&*~" />
    </div>
  );
};

import { FC, memo } from "react";
import { useAppSelector } from "../redux/typed-hooks";
import { VERY_WEAK, WEAK, GOOD, STRONG, VERY_STRONG } from "../constants";

type Text = "VERY WEAK" | "WEAK" | "GOOD" | "STRONG" | "VERY STRONG";
type Colour = "bg-red-600" | "bg-yellow-300" | "bg-green-500" | "bg-blue-600";

export const Badge: FC = memo(() => {
  let text: Text | null = null;
  let colour: Colour | null = null;
  const passwordLength = useAppSelector<number>((state) => state.range.length);

  if (passwordLength <= VERY_WEAK) {
    text = "VERY WEAK";
    colour = "bg-red-600";
  }

  if (passwordLength > VERY_WEAK && passwordLength <= WEAK) {
    text = "WEAK";
    colour = "bg-red-600";
  }

  if (passwordLength > WEAK && passwordLength <= GOOD) {
    text = "GOOD";
    colour = "bg-yellow-300";
  }

  if (passwordLength > GOOD && passwordLength <= STRONG) {
    text = "STRONG";
    colour = "bg-green-500";
  }

  if (passwordLength >= VERY_STRONG) {
    text = "VERY STRONG";
    colour = "bg-blue-600";
  }

  return (
    <div
      className={`flex justify-center items-center select-none
      w-36 h-14 ${colour} text-white text-lg font-semibold rounded-xl px-2`}
    >
      {text}
    </div>
  );
});

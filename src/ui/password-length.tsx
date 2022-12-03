import { FC, memo } from "react";
import { useAppSelector } from "../redux/typed-hooks";

export const PasswordLength: FC = memo(() => {
  const passwordLength = useAppSelector<number>((state) => state.range.length);

  return (
    <p className="text-2xl text-white font-semibold mb-4">
      Password length: {passwordLength}
    </p>
  );
});

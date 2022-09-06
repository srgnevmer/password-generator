import { FC } from "react";
import { useAppSelector } from "../redux/typedHooks";

export const Badge: FC = () => {
  const length = useAppSelector<number>((state) => state.passwordConfig.length);

  if (length < 4) return <span className="badge badge-red">VERY WEAK</span>;
  if (length < 8) return <span className="badge badge-red">WEAK</span>;
  if (length < 10) return <span className="badge badge-yellow">GOOD</span>;
  if (length < 12) return <span className="badge badge-green">STRONG</span>;
  if (length >= 12)
    return <span className="badge badge-blue">VERY STRONG</span>;
  return null;
};

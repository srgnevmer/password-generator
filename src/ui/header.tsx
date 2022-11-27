import { FC } from "react";
import { REPOSITORY_LINK } from "../constants";

export const Header: FC = () => {
  return (
    <div className="h-12 flex justify-end items-center">
      <a
        href={REPOSITORY_LINK}
        className="text-2xl text-white font-semibold mx-3"
      >
        GitHub
      </a>
    </div>
  );
};

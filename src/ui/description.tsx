import { FC } from "react";

export const Description: FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <h1 className="text-sm text-white font-semibold my-5">
        PASSWORD GENERATOR TOOL
      </h1>
      <p className="text-4xl text-white font-semibold">
        Generate a secure password
      </p>
    </div>
  );
};

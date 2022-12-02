import { FC, memo } from "react";

interface IconButtonProps {
  icon: JSX.Element;
  func: () => void;
}

export const IconButton: FC<IconButtonProps> = memo(({ icon, func }) => {
  return (
    <button
      onClick={func}
      className="primary flex justify-center items-center text-white 
      font-semibold rounded-xl shrink-0 bg-blue-600 hover:bg-blue-700 
      active:bg-blue-600 transition duration-100"
    >
      {icon}
    </button>
  );
});

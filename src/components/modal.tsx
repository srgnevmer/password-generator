import { FC, MouseEvent } from "react";
import { useAppDispatch } from "../redux/typedHooks";
import { toggleStateModal } from "../redux/reducers/modalSlice";

interface ModalProps {
  nodeRef: any;
}

export const Modal: FC<ModalProps> = ({ nodeRef }) => {
  const dispatch = useAppDispatch();

  const closeModal = (): void => {
    dispatch(toggleStateModal());
  };

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div
      ref={nodeRef}
      onClick={handleClickOutside}
      className="w-screen h-full absolute z-10 bg-black/70 
      flex justify-center items-center px-2"
    >
      <div className="w-full max-w-md bg-slate-700 rounded-lg">
        <div className="flex justify-end mt-2 mr-2">
          <button
            onClick={closeModal}
            className="border-2 border-slate-200 rounded-full p-1 hover:bg-slate-200 group transition delay-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-slate-200 group-hover:text-slate-500 transition delay-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center mb-10">
          <h1 className="text-slate-100 font-semibold my-2.5 text-xl sm:text-3xl">
            Password copied to clipboard
          </h1>
          <p className="text-slate-100 font-semibold text-xl text-center sm:w-96">
            To paste the password someplace else, press{" "}
            <span className="px-2 py-1.5 text-xs font-semibold text-gray-100 bg-gray-500 border border-gray-500 rounded-lg">
              CTRL
            </span>{" "}
            +{" "}
            <span className="px-2 py-1.5 text-xs font-semibold text-gray-100 bg-gray-500 border border-gray-500 rounded-lg">
              V
            </span>{" "}
            on your keyboard.
          </p>
        </div>
      </div>
    </div>
  );
};

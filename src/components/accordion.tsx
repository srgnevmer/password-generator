import { FC, useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="w-full cursor-pointer py-4 px-5 bg-indigo-600 text-white flex justify-between items-center rounded-t-lg"
        onClick={handleClick}
        style={
          isOpen
            ? {}
            : {
                borderBottomRightRadius: "0.5rem",
                borderBottomLeftRadius: "0.5rem",
              }
        }
      >
        <p className="font-semibold sm:text-xl">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 duration-200"
          style={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(360deg)" }
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className="w-full py-4 px-5 bg-slate-600 hidden overflow-hidden rounded-b-lg"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        <p className="text-white font-medium sm:text-lg">{answer}</p>
      </div>
    </>
  );
};

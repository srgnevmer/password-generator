import { FC } from "react";
import { Navbar } from "../components/navbar";
import { Accordion } from "../components/accordion";

const Faq: FC = () => {
  return (
    <div className="w-screen h-screen sm:overflow-hidden">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[700px] h-[390px] bg-slate-700 flex flex-col items-center rounded-lg">
          <h1 className="text-slate-50 font-semibold text-2xl text-center sm:text-3xl py-5">
            What makes a password strong?
          </h1>
          <ul className="w-full h-full px-2 overflow-y-scroll">
            <li className="mb-4">
              <Accordion
                question="Why should my password be unique?"
                answer="If you use the same password for both your email account and your bank account login, an attacker only needs to steal one password to get access to both accounts, doubling your exposure. If you've used that same password for 14 different accounts, you're making the attacker's job very, very easy. You can protect yourself by using a generator to create unique passwords that are easy to remember."
              />
            </li>
            <li className="mb-4">
              <Accordion
                question="Why should my password be random?"
                answer="To prevent sophisticated hackers from getting into your accounts, you need to use a random password generator to keep your accounts safe. The password generator will create dozens of random passwords consisting of numbers, letters, and symbols that even the most skilled hackers cannot guess."
              />
            </li>
            <li className="mb-4">
              <Accordion
                question="I need to generate a memorable, but strong password. Any tips?"
                answer="A random password generator is the best way to generate passwords that are both secure."
              />
            </li>
            <li className="mb-4">
              <Accordion
                question="What makes a password strong?"
                answer="The longer a password, the more secure it is. A strong password should be at least 10 characters long.
                Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.
                A strong password should be unique to each account to reduce vulnerability in the event of a hack."
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import { FC, useEffect, useState, useRef } from "react";
import { Navbar } from "../../components/navbar";
import { Checkboxes } from "../../components/checkboxes";
import { Range } from "../../components/range";
import { Badge } from "../../components/badge";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { Password, PasswordConfig } from "../../types";
import { generatePassword } from "../../utils/generatePassword";
import { modifyString } from "../../utils/modifyString";
import { useAppSelector, useAppDispatch } from "../../redux/typedHooks";
import { toggleStateModal } from "../../redux/reducers/modalSlice";
import { CSSTransition } from "react-transition-group";
import "./animation.css";

const Home: FC = () => {
  const nodeRef = useRef(null);
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<string>("");
  const isOpenModal = useAppSelector<boolean>((state) => state.modal.isOpen);
  const passwordConfig = useAppSelector<PasswordConfig>(
    (state) => state.passwordConfig
  );

  const getPassword = (config: Password): string => {
    return generatePassword(config);
  };

  const setNewPassword = (): void => {
    setPassword(
      getPassword({
        length: passwordConfig.length,
        ...passwordConfig.characters,
      })
    );
  };

  const copyPassword = async (): Promise<void> => {
    await navigator.clipboard.writeText(password);
    dispatch(toggleStateModal());
  };

  const passwordReset = (): void => {
    setNewPassword();
  };

  useEffect(() => {
    setNewPassword();
  }, [passwordConfig]);

  return (
    <>
      <CSSTransition
        in={isOpenModal}
        timeout={500}
        unmountOnExit
        classNames="animation"
        nodeRef={nodeRef}
      >
        <Modal nodeRef={nodeRef} />
      </CSSTransition>
      <div className="w-screen h-screen lg:overflow-hidden overflow-hidden">
        <Navbar />
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full mx-2 max-w-2xl bg-slate-700 rounded-lg py-8">
            <div className="w-full flex flex-col items-center mb-3">
              <h1 className="text-slate-100 font-semibold my-2.5 text-xl sm:text-4xl">
                Random Password Generator
              </h1>
              <p className="text-slate-300 font-semibold text-center sm:text-lg">
                Create strong and secure passwords to keep your account safe
                online.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row mb-3">
              <p className="text-slate-300 font-semibold sm:text-lg ml-2 sm:ml-7">
                Characters used:
              </p>
              <Checkboxes />
            </div>
            <div className="flex flex-col sm:flex-row justify-between mx-2 sm:mx-7 mb-5">
              <Range />
              <div className="w-full h-12 max-w-sm flex">
                <div className="w-full bg-gray-500 rounded-l-lg flex justify-between items-center">
                  <div className="ml-4 text-slate-300 font-semibol text-sm sm:text-base">
                    {modifyString(password)}
                  </div>
                  <div>
                    <Badge />
                  </div>
                </div>
                <div className="w-28 bg-gray-500 rounded-r-lg flex justify-center items-center">
                  <Button
                    width={70}
                    height={35}
                    text="Reset"
                    callback={passwordReset}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center px-2 mb-2">
              <Button
                width={300}
                height={40}
                text="Copy the password"
                callback={copyPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

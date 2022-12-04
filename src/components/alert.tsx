import { FC } from "react";
import { createPortal } from "react-dom";
import { config, animated, useTransition } from "@react-spring/web";
import { SvgSelector } from "./index";
import { useAppSelector } from "../redux/typed-hooks";

interface AlertProps {
  text: string;
}

const alertRoot = document.getElementById("alert") as HTMLDivElement;

export const Alert: FC<AlertProps> = ({ text }) => {
  const alertState = useAppSelector<boolean>((state) => state.alert.isActive);
  const transition = useTransition(alertState, {
    config: config.slow,
    from: { opacity: 0, x: 350 },
    enter: { opacity: 1, x: 0, y: 0 },
    leave: { opacity: 0, x: 350 },
  });

  return createPortal(
    transition(
      (style, item) =>
        item && (
          <animated.div
            style={style}
            className="absolute top-3 right-3 bg-blue-600
            flex items-center px-2 py-3 rounded-lg"
          >
            <SvgSelector id="check" />
            <span className="text-white text-lg font-semibold mx-2">
              {text}
            </span>
          </animated.div>
        )
    ),
    alertRoot
  );
};

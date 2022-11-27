import { FC, useState, useEffect } from "react";
import { getWidthWindow } from "../utils";
import { MIN_WINDOW_WIDTH } from "../constants";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(getWidthWindow());

  useEffect(() => {
    const handleWindowResize = (): void => {
      setWindowWidth(getWidthWindow());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowWidth < MIN_WINDOW_WIDTH) {
    return (
      <div className="min-h-screen flex grow justify-center items-center bg-slate-900">
        <p className="text-center text-3xl text-white font-semibold">
          Unfortunately, this window width is not supported
        </p>
      </div>
    );
  } else {
    return children;
  }
};

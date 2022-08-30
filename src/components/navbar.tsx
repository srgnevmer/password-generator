import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: FC = () => {
  const active: Record<string, string> = {
    color: "#94a3b8",
  };

  return (
    <div className="w-full h-16 bg-slate-700 flex items-center">
      <ul className="w-full sm:w-40 px-4 flex justify-between">
        <li>
          <NavLink
            to="/"
            className="text-slate-50 active:text-slate-400 duration-300 lg:hover:text-slate-300 text-2xl font-semibold"
            style={({ isActive }) => (isActive ? active : {})}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className="text-slate-50 active:text-slate-400 lg:hover:text-slate-300 duration-300 text-2xl font-semibold"
            style={({ isActive }) => (isActive ? active : {})}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

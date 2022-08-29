import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full sm:w-4/5 max-w-lg flex flex-col justify-center items-center py-3">
        <p className="text-xl text-sky-400">404</p>
        <p className="text-5xl text-slate-200 my-3">Page not found.</p>
        <p className="text-xl text-center text-gray-300 mb-7">
          Sorry, we could not find the page you are looking for.
        </p>
        <Link
          to="/"
          className="text-2xl text-sky-400 px-4 py-2 bg-slate-600 rounded-md active:text-sky-600 lg:hover:bg-slate-700 duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

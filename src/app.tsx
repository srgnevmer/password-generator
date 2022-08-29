import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Spinner } from "./components/spinner";

const Home = lazy(() => import("./pages/home"));
const Faq = lazy(() => import("./pages/faq"));
const NotFound = lazy(() => import("./pages/not-found"));

export const App: FC = () => {
  return (
    <Suspense fallback={<Spinner size={100} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

import { FC, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const BookPage = lazy(() => import("./BookPage"));

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import React, { FC } from "react";
import AppRouter from "../pages/AppRouter";
import AppProvider from "./AppProvider";
import { Loader } from "../shared/components";

const App: FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </React.Suspense>
  );
};

export default App;

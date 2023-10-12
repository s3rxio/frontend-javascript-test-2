import { FC } from "react";
import Router from "../pages/Router";
import AppProvider from "./AppProvider";

const App: FC = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;

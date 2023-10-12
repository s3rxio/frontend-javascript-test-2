import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Router from "../pages/Router";

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;

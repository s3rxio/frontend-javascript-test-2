export {};

declare global {
  declare type RootState = import("../src/app/store").RootState;
  declare type AppDispatch = import("../src/app/store").AppDispatch;

  interface ImportMetaEnv {
    REACT_APP_BOOKS_API_KEY: string;
  }
}

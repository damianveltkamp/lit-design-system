import { createContext } from "@lit/context";

export type HeaderContextValue = {
  user: {
    firstName: string;
    lastName: string;
    age: number;
  };
};

export type HeaderContextCallbacks = {
  changeFirstname: (newFirstname: string) => void;
  changeLastname: (newLastname: string) => void;
  incrementAge: () => void;
};

export const headerContext = createContext<HeaderContextValue>("headerContext");
export const headerCallbackContext = createContext<HeaderContextCallbacks>(
  "headerCallbackContext",
);

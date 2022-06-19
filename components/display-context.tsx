import { createContext, useState, createElement } from "react";
import { DisplayVal } from "./fibonacci-cards";

type DisplayContextType = [
  DisplayVal | null,
  React.Dispatch<React.SetStateAction<DisplayVal | null>>
];

export const DisplayContext = createContext<DisplayContextType>([
  null,
  () => {},
]);

export const Display = ({ children }: { children: React.ReactNode }) => {
  const [display, setDisplay] = useState<DisplayVal | null>(null);

  return createElement(
    DisplayContext.Provider,
    { value: [display, setDisplay] },
    children
  );
};

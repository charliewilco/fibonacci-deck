import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  createElement,
} from "react";
import { DisplayVal } from "./fibonacci-cards";

type DisplayContextType = [
  DisplayVal | null,
  Dispatch<SetStateAction<DisplayVal | null>>
];

export const DisplayContext = createContext<DisplayContextType>([
  null,
  () => {},
]);

export const Display: React.FC = ({ children }) => {
  const [display, setDisplay] = useState<DisplayVal | null>(null);

  return createElement(
    DisplayContext.Provider,
    { value: [display, setDisplay] },
    children
  );
};

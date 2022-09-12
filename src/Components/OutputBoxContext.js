import { createContext, useState } from "react";

const OutputBoxContext = createContext();

export function OutputBoxProvider({ children }) {
  const [box, setBox] = useState(0);
  const [atHandValue, setAtHandValue] = useState(0);
  const [operator, setOperator] = useState(undefined);

  return (
    <OutputBoxContext.Provider value={{ box, setBox, atHandValue, setAtHandValue, operator, setOperator }}>
      {children}
    </OutputBoxContext.Provider>
  );
}

export default OutputBoxContext;

import { nanoid } from "nanoid";
import { useContext } from "react";

import Button from "./Button";
import OutputBoxContext from "./OutputBoxContext";

const InputArea = () => {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ["+", "-", "*", "/"];

  const { box, setBox, operator, setOperator, atHandValue, setAtHandValue } =
    useContext(OutputBoxContext);

  const handleButton = (e) => {
    setBox((prev) => Number(prev + e.target.value));
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
    setAtHandValue(box);
    setBox("");
  };

  const handleEqual = (e) => {
    let result;
    switch (operator) {
      case "+":
        result = Number(atHandValue) + Number(box);
        setBox(result);
        break;
      case "-":
        result = Number(atHandValue) - Number(box);
        setBox(result);
        break;
      case "*":
        result = Number(atHandValue) * Number(box);
        setBox(result);
        break;
      case "/":
        result = Number(atHandValue) / Number(box);
        setBox(result);
        break;
      default:
        console.log("no operation");
    }
  };

  const buttonElements = buttons.map((button) => {
    return <Button handler={handleButton} key={nanoid()} value={button} />;
  });

  const operatorsElements = operators.map((operator) => {
    return <Button handler={handleOperator} key={nanoid()} value={operator} />;
  });

  return (
    <section className="mt-8 grid grid-cols-3 gap-3">
      {buttonElements}
      {operatorsElements}
      <Button handler={handleEqual} value="=" />
    </section>
  );
};

export default InputArea;

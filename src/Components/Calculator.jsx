import InputArea from "./InputArea";
import OutputArea from "./OutputArea";

const Calculator = () => {
  return (
    <main className="p-5 bg-red-200 m-auto min-h-[30rem] min-w-[17.5rem] rounded-2xl shadow-lg sm:min-w-[30rem] xs:min-w-[20rem]">
      <OutputArea />
      <InputArea />
    </main>
  );
};

export default Calculator;

import OutputArea from "./OutputArea";

const classes =
  `p-5 bg-red-200 m-auto min-h-[30rem] min-w-[17.5rem] rounded-2xl shadow-lg sm:min-w-[30rem] xs:min-w-[20rem]`;

const Calculator = () => {
  return (
    <main className={classes}>
      <OutputArea />
    </main>
  );
};

export default Calculator;

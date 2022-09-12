import { useContext } from "react";
import OutputBoxContext from "./OutputBoxContext";

const OutputArea = () => {
  const { box } = useContext(OutputBoxContext);

  return (
    <section>
      <input
        readOnly={true}
        value={box}
        type="text"
        className="py-3 rounded-lg mt-2 min-w-full shadow-lg text-2xl indent-3 font-sans"
      />
    </section>
  );
};

export default OutputArea;

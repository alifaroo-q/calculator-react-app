import Calculator from "./Components/Calculator";
import { OutputBoxProvider } from "./Components/OutputBoxContext";

const App = () => {
  return (
    <div className="App flex h-screen">
      <OutputBoxProvider>
        <Calculator />
      </OutputBoxProvider>
    </div>
  );
}

export default App;
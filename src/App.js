import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="App">
      <Calculator />
      <footer className="App-footer">
        <a
          href="https://github.com/Samantha-a-T/calculator-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>{" "}
        by Samantha Thibault
      </footer>
    </div>
  );
}

export default App;

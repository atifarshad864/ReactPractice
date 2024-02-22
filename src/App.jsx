import { useState } from "react";
import "./App.css";
// import Header from "./components/Props";
function App() {
  const [value, setValues] = useState(0);
  const incrvalue = () => {
    setValues(value + 1);
  };
  const decvalues = () => {
    setValues(value - 1);
  };
  return (
    <div>
      <h1>Add the values: {value}</h1>
      <button onClick={incrvalue}>+</button>
      <br />
      <br />
      <button onClick={decvalues}>-</button>
    </div>
  );
}

export default App;

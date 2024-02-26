import { useState } from "react";
import "./App.css";
import InputForm from "./components/Header";
// import Header from "./components/Props";
function App() {
  // const [value, setValues] = useState(0);
  // const incrvalue = () => {
  //   setValues(value + 1);
  // };
  // const decvalues = () => {
  //   setValues(value - 1);
  // };
  return (
    <div>
      {/* <h1>Add the values: {value}</h1>
      <button onClick={incrvalue}>+</button> */}
      {/* <br />
      <br />
      <button onClick={decvalues}>-</button> */}
      <InputForm />
    </div>
  );
}

export default App;

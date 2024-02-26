import React from "react";
import "./App.css";
// import Header from "./components/Props";
// import Usereducer from "./components/usereducer";
// import Usereducerother from "./components/Usereducerother";
// import UseEffect from "./components/UseEffect";
import ReducerTodolist from "./components/ReducerTodolist";
import ShoppingCart from "./components/useredShopping";
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
      {/* <Usereducer /> */}

      {/* <Usereducerother /> */}
      {/* <UseEffect />*/}
      <ReducerTodolist />
      <useredShopping />
      <ShoppingCart />
    </div>
  );
}

export default App;

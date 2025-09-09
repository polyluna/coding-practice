import React, { useState } from "react";

function countInitial() {
  console.log("run function hey");
  return 4;
}

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementalCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementalCount}>+</button>
    </>
  );
}

export default App;

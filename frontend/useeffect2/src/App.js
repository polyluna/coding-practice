import { useState, useEffect } from "react";

interface DemoProps {}

function App({}: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("the count is", count);

    return () => {
      console.log("this is cleaned");
    };
  }, [count]); //dependency ar

  const add = () => {
    const total = count + 1;
    setCount(total);
  };

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => add()}>Increment</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("1");
  console.log("render");

  useEffect(() => {
    console.log("onMount");
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("1")}>A</button>
        <button onClick={() => setResourceType("2")}>B</button>
        <button onClick={() => setResourceType("3")}>C</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;

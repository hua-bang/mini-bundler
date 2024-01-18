import React, { useState, useEffect } from "react";
import { add } from "./add";
import Card from "./component/card/index.tsx";

const App = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("render!!");
  }, []);

  return (
    <div onClick={() => setCount((prev) => add(prev, 2))}>
      count: <Card title={count} />
    </div>
  );
};

export default App;

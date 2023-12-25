import React, { useState } from "react";
import Decrement from "../decremenet";
import Increment from "../increment";
import Input from "../increment-by-input";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Increment count={count} setCount={setCount} />
      <h1>{count}</h1>
      <Decrement count={count} setCount={setCount} />

      <hr />
      <Input count={count} setCount={setCount}/>
    </>
  );
};

export default Counter;

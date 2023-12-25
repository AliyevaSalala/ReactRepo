import React from "react";

const Decrement = (props) => {
  return (
    <>
      <button onClick={() => props.setCount((count) => count - 1)}>Increment</button>
    </>
  );
};

export default Decrement;

import React, { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>{count}</p>

      <section>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      </section>

      <p>userInput: {userInput}</p>
    </div>
  );
};

export default UseStateDemo;

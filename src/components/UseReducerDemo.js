import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    default:
      throw new Error();
  }
};

const useReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>{state.count}</p>

      <section>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>

        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </section>

      <p>userInput: {userInput}</p>
    </div>
  );
};

export default useReducerDemo;

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "setUserInput":
      return { ...state, userInput: action.payload };

    default:
      throw new Error();
  }
};

const useReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: "" });

  return (
    <div>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "setUserInput", payload: e.target.value })
        }
      />

      <p>{state.count}</p>

      <section>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>

        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </section>

      <p>userInput: {state.userInput}</p>
    </div>
  );
};

export default useReducerDemo;

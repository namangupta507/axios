import React, { useReducer } from "react";
import "./UseReducer.1.css"

export const UseReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increement":
        return state + 1;
      case "Decreement":
        if (state === 0) {
          return state;
        }
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container">
        <div className="main">
          <h1>useReducer hook</h1>
          <div className="button-block">
            <button
              className="action-button"
              onClick={() => {
                dispatch({ type: "Increement" });
              }}
            >
              +
            </button>
            <input type="text" placeholder={state}></input>
            <button
              className="action-button"
              onClick={() => {
                dispatch({ type: "Decreement" });
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

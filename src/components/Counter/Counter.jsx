import { useState } from "react";
import "./Counter.css"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const buttonStyles ={
    backgroundColor: "gray",
    padding: "10px",
    borderRadius: "9px",
    color: "white",
    marginBottom: "15px",
    fontSize: "20px"

  }

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="component-wrapper">
      <h2 className="component-name">Component 'Counter'</h2>
      <div className="counter-number">{counter}</div>
      <button style ={buttonStyles} onClick={increaseCounter}>Increase Counter +1</button>
    </div>
  );
};

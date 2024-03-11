import { useState } from "react";
import "./counter.css";

const Counter = (props) => {
  const [value, setValue] = useState(5);
  const [inputNum, setInputNum] = useState(0);

  const handleIncrement = (param) => {
    setValue(value + param);
  };

  const handleDecrement = (param) => {
    if (value > 0) {
      setValue(value - param);
    }
  };

  const handleInputChange = (event) => {
    setInputNum(Number(event.target.value));
  };

  return (
    <div className="container">
      <h1>Item name: {props.itemName}</h1>
      <h1 className={`${value > 0 ? "nonZeroHeading" : "zeroHeading"}`}>
        Count:{value > 0 ? value : "Zero"}
      </h1>
      <input
        type="number"
        placeholder="To be incremented"
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          handleIncrement(inputNum);
        }}
      >
        Increment
      </button>
      {value > 0 ? (
        <button
          onClick={() => {
            handleDecrement(inputNum);
          }}
        >
          Decrement
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default counter;

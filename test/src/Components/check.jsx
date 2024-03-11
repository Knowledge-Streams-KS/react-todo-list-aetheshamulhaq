import { usestate } from "react";

const check = () => {
  const [digits, setDigits] = usestate(0);
  const [inhance, setInhance] = usestate(0);
  const incre = () => {
    setDigits(digit + imhance);
  };
  const handleEvent = (event) => {
    setInhance(event.targer.value);
  };

  return (
    <>
      <h1>digit:{digit > 0 ? digit : "no item"}</h1>
      <input onChange={handleEvent} type="text" />
      <button>decrese</button>
    </>
  );
};
export default check;

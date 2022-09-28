import { useState } from "react";

const useCounter = () => {
  //* Contador para las parejas encontradas.
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return { counter, increment, resetCounter };
};

export default useCounter;

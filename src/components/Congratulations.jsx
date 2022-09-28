import React from "react";
import useReset from "../hooks/useReset";

const Congratulations = ({
  listCardsRandom,
  resetCounter,
  changePrevIndexCard,
}) => {
  const { reset } = useReset();
  return (
    <div className="overlay">
      <h2>Congratulations...!!!</h2>
      <button
        onClick={() =>
          reset(listCardsRandom, resetCounter, changePrevIndexCard)
        }
      >
        Play again <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export default Congratulations;

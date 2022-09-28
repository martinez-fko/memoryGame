import { useState } from "react";

const usePrevIndexCards = () => {
  //* Hook para saber si hay ya una tarjeta selecciona 
  //* -1 = "no hay tarjetas seleccionadas";
  const [prevIndexCard, setPrevIndexCard] = useState(-1);

  const changePrevIndexCard = (index) => {
    setPrevIndexCard(index);
  };

  return { prevIndexCard, changePrevIndexCard };
};

export default usePrevIndexCards;

import { useEffect, useState } from "react";
import cardsData from "../data/cardsData";

const useListCards = () => {
  //* Lista de cards para mostrar el juego
  const [cardsList, setCardsList] = useState([]);

  // Se ordena aleatoriamente. Se llama al crear el juego
  // Si el usuario termina puede jugar de nuevo con un nuevo orden
  const listCardsRandom = () => {
    cardsData.map( card => card.status = 'down')
    setCardsList(cardsData.sort(() => Math.random() - 0.5))
  }

  const setListCards = (data) => {
    setCardsList(data);
  };

  useEffect(() => {
    listCardsRandom()
  }, []);


  return { cardsList, setListCards , listCardsRandom};
};

export default useListCards;

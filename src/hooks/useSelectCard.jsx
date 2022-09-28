import useValidateCards from "./useValidateCards";
const useSelectCard = () => {
  //* Marcamos la primera card seleccionada con estatus selected y creamos una copia y la guardamos.
  //* Si es la primera seteamos el prevIndexCar con el indice de la card
  const { validateCards } = useValidateCards();
  const selectCard = (
    index,
    cardsList,
    setListCards,
    prevIndexCard,
    changePrevIndexCard,
    changeBlock,
    increment
  ) => {
    cardsList[index].status = "selected";
    setListCards([...cardsList]);
    if (prevIndexCard === -1) {
      changePrevIndexCard(index);
    } else {
      //* En la segunda tarjeta seleccionada
      validateCards(
        index,
        changeBlock,
        setListCards,
        prevIndexCard,
        changePrevIndexCard,
        increment,
        cardsList
      );
    }
  };

  return { selectCard };
};

export default useSelectCard;

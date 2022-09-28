const useValidateCards = () => {
  //* Validamos si es la misma card con el nombre y cambiamos el status
  const validateCards = (
    newIndexCard,
    changeBlock,
    setListCards,
    prevIndexCard,
    changePrevIndexCard,
    increment,
    cardsList
  ) => {
    changeBlock("block");
    setTimeout(() => {
      const prev = cardsList[prevIndexCard];
      const current = cardsList[newIndexCard];
      if (prev.icon === current.icon) {
        prev.status = "up";
        current.status = "up";
        increment();
      } else {
        prev.status = "down";
        current.status = "down";
      }
      setListCards([...cardsList]);
      changePrevIndexCard(-1);
      changeBlock("");
    }, 1000);
  };
  return { validateCards };
};

export default useValidateCards;

const useReset = () => {
  //* Si el usuario juega de nuevo se resetea todo
  const reset = (listCardsRandom, resetCounter, setPrevIndexCard) => {
    setPrevIndexCard(-1);
    listCardsRandom();
    resetCounter(0);
  };

  return { reset };
};

export default useReset;

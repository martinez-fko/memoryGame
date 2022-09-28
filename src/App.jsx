import useListCards from "./hooks/useListCards";
import useCounter from "./hooks/useCounter";
import usePrevIndexCards from "./hooks/usePrevIndexCard";
import useSelectCard from "./hooks/useSelectCard";
import useBlock from "./hooks/useBlock";
import Footer from "./components/Footer";
import ContainerCards from "./components/ContainerCards";
import Congratulations from "./components/Congratulations";

function App() {
  const { cardsList, setListCards, listCardsRandom } = useListCards();
  const { counter, increment, resetCounter } = useCounter();
  const { prevIndexCard, changePrevIndexCard } = usePrevIndexCards();
  const { selectCard } = useSelectCard();
  const { block, changeBlock } = useBlock();

  const selectedCard = (index) => {
    selectCard(
      index,
      cardsList,
      setListCards,
      prevIndexCard,
      changePrevIndexCard,
      changeBlock,
      increment
    );
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h2>You have {counter} pairs found</h2>

      {/* ==== contendor de las card ======== */}
      <ContainerCards
        cardsList={cardsList}
        block={block}
        selectedCard={selectedCard}
      />
      {/* ==== Si lleva 8 parejas muestra el mensaje y el boton para jugar otra vez ==== */}
      {counter === 8 && (
        <Congratulations
          changePrevIndexCard={changePrevIndexCard}
          listCardsRandom={listCardsRandom}
          resetCounter={resetCounter}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Card from "../components/Card";

const ContainerCards = ({ cardsList, block, selectedCard }) => {
  return (
    <div className="cards-container finish">
      {cardsList.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          block={block}
          selectCard={selectedCard}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContainerCards;

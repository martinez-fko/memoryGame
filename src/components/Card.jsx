import React from "react";

const Card = ({ card, block, selectCard, index }) => {
  return (
    <div
      className={`card ${card.status} ${block}`}
      onClick={() => selectCard(index)}
    >
      {card.status !== "down" && <i className={card.icon}></i>}
    </div>
  );
};

export default Card;

import { useState } from "react";

const useBlock = () => {
  //* Agrega una clase para bloquear el point-events
  //* Evita que el usuario haga clic en más de dos cards
  const [block, setBlock] = useState("");

  const changeBlock = (data) => {
    setBlock(data);
  };

  return { block, changeBlock };
};

export default useBlock;

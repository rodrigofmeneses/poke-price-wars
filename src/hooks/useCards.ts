import { Dispatch, SetStateAction, useEffect, useState } from "react";

const fetchCards = async (
  amount: number,
  setters: Dispatch<SetStateAction<any[]>>[]
) => {
  const response = { data: ["card1", "card2"] };
  setters.forEach((setter) => setter(response.data));
};

const useCards = (amount: number) => {
  const [allCards, setAllCards] = useState<any>([]);
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    // Executa função assincrona
    fetchCards(amount, [setAllCards, setCards]);
  }, []);

  return [cards, setCards, allCards];
};

export default useCards;

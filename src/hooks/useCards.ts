import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { pokeApiClient } from "../api";

const fetchCards = async (
  amount: number,
  setters: Dispatch<SetStateAction<any[]>>[]
) => {
  const response = await pokeApiClient.findCardsByQueries({
    pageSize: amount,
    page: 1,
  });

  setters.forEach((setter) => setter(response));
};

type UseCardsReturnType = [
  cards: Card[],
  setCards: Dispatch<SetStateAction<Card[]>>,
  allCards: Card[]
];

const useCards = (amount: number): UseCardsReturnType => {
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchCards(amount, [setAllCards, setCards]);
  }, []);

  return [cards, setCards, allCards];
};

export default useCards;

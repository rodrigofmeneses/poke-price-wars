import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { pokeApiClient } from "../api";

const fetchCards = async (
  amount: number,
  setters: Dispatch<SetStateAction<any[]>>[]
) => {
  const numPages = Math.floor(amount / 250) + 1;
  const numCardsLastPage = amount % 250;

  let allCards: pokeApiClient.Card[] = [];
  for (let page = 1; page <= numPages; page++) {
    allCards = [
      ...allCards,
      ...(await pokeApiClient.findCardsByQueries({
        pageSize: page != numPages ? 250 : numCardsLastPage,
        page,
      })),
    ];
  }

  setters.forEach((setter) => setter(allCards));
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

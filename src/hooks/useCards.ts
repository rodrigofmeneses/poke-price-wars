import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { pokeApiClient } from "../api";

const fetchCards = async (
  amount: number,
  setters: Dispatch<SetStateAction<any[]>>[]
) => {
  const response = await pokeApiClient.findCardsByQueries({
    pageSize: 3,
    page: 1,
  });

  setters.forEach((setter) => setter(response));
};

const useCards = (amount: number) => {
  const [allCards, setAllCards] = useState<any>([]);
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    fetchCards(amount, [setAllCards, setCards]);
  }, []);

  return [cards, setCards, allCards];
};

export default useCards;

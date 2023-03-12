import { useState } from "react";
import "./app.css";
import { Game } from "./components";
import { useCards } from "./hooks";

const App = () => {
  const [showGame, setShowGame] = useState<boolean>(false);
  const [cards, setCards, allCards] = useCards(4);

  const handleStartClick = () => {
    setShowGame(true);
  };

  return (
    <main>
      {!showGame && (
        <>
          <h1 className="title">Welcome to PokePriceWars</h1>
          <h2 className="headline gradient text">
            Pokemon pricing guessing game
          </h2>
          {cards.length === 0 ? (
            <p className="loading">Loading Game</p>
          ) : (
            <button
              type="submit"
              className="button gradient"
              onClick={handleStartClick}
            >
              Start
            </button>
          )}
        </>
      )}
      {showGame && (
        <Game
          cardState={[cards, setCards]}
          originalList={allCards}
          setShowGame={setShowGame}
        />
      )}
    </main>
  );
};

export default App;

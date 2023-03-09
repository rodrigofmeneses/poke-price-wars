import { useState } from "react";
import "./app.css";
import { useCards } from "./hooks";

const App = () => {
  const [showGame, setShowGame] = useState<boolean>(false);
  const [cards, setCards, allCards] = useCards(100);

  const handleStartClick = () => {
    setShowGame(true);
  };

  return (
    <main>
      {!showGame && (
        <>
          <h1 className="title">Welcome to SnapWars</h1>
          <h2 className="headline gradient text">Marvel Snap guessing game</h2>
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
        <>
          <h1>Game</h1>
        </>
      )}
    </main>
  );
};

export default App;

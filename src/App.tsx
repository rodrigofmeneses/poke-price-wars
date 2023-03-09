import { useState } from "react";
import "./app.css";

const App = () => {
  const [showGame, setShowGame] = useState<boolean>(false);
  const [cards, setCards] = useState(["123"]);

  const handleStartClick = () => {
    setShowGame(true);
  };

  return (
    <main>
      {!showGame && (
        <>
          <h1>Welcome to SnapWars</h1>
          <h2>Marvel Snap guessing game</h2>
          {cards.length === 0 ? (
            <p>Loading Game</p>
          ) : (
            <button type="submit" onClick={handleStartClick}>
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

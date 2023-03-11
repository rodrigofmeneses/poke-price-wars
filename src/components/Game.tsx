import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import "./game.css";

interface GameProps {
  cardState: [Card[], React.Dispatch<React.SetStateAction<Card[]>>];
  originalList: Card[];
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleChoice = (c: Card) => {};

const Game: React.FC<GameProps> = ({
  cardState,
  originalList,
  setShowGame,
}) => {
  const [over, setOver] = useState<boolean>(false);
  const [card1, setCard1] = useState<Card | null>(null);
  const [card2, setCard2] = useState<Card | null>(null);
  // TODO: Use actual random repos
  useEffect(() => {
    setCard1(originalList[0]);
    setCard2(originalList[1]);
  }, []);

  return (
    <div className="game">
      {over ? (
        <div className="score"></div>
      ) : (
        card1 &&
        card2 && (
          <div className="cards">
            <h1 className="title">Choose the most expensive card</h1>
            <div className="container">
              <CardContainer content={card1} handler={handleChoice} />

              <div className="dashboard">
                <h1 className="icon-text">Click to</h1>
                <img
                  src="public/pokeball.webp"
                  alt="Pokeball"
                  className="icon-versus"
                />
                <h1 className="icon-text">next battle</h1>
              </div>

              <CardContainer content={card2} handler={handleChoice} />
            </div>
          </div>
        )
      )}
      <div className="buttons">
        <button
          type="submit"
          className="button gradient"
          onClick={() => setShowGame(false)}
        >
          {over ? "Play Again" : "Back"}
        </button>
        {!over && (
          <button
            type="submit"
            className="button gradient alternate"
            // TODO: change this button to refresh cards
            onClick={() => setShowGame(false)}
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;

import { useEffect, useState } from "react";

interface GameProps {
  cardState: [Card[], React.Dispatch<React.SetStateAction<Card[]>>];
  originalList: Card[];
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const Game: React.FC<GameProps> = ({
  cardState,
  originalList,
  setShowGame,
}) => {
  const [over, setOver] = useState<boolean>(false);
  const [card1, setCard1] = useState<Card | null>(null);
  const [card2, setCard2] = useState<Card | null>(null);

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
              {/* TODO: Create Component for the Card */}
              <div>
                <h1>{card1.name}</h1>
              </div>

              <div className="dashboard">Versus</div>

              <div>
                <h1>{card2.name}</h1>
              </div>
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
          Skip
        </button>
        <button
          type="submit"
          className="button gradient alternate"
          onClick={() => setShowGame(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Game;

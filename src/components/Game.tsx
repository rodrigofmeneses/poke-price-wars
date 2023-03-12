import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import CardContainer from "./CardContainer";
import "./game.css";

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
  const [cards, setCards] = cardState;
  const [over, setOver] = useState<boolean>(false);
  const [endRound, setEndRound] = useState<boolean>(false);
  const [winner, setWinner] = useState<Card | null>(null);
  const [card1, setCard1] = useState<Card | null>(null);
  const [card2, setCard2] = useState<Card | null>(null);
  const [correct, setCorrect] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);

  const randomSelect = (arr: Card[]) => {
    if (arr.length < 2) {
      setCards(originalList);
      setOver(true);
      return;
    }

    const generateRandom = () => Math.floor(Math.random() * arr.length);

    const randomIndex1 = generateRandom();
    let randomIndex2 = generateRandom();

    while (randomIndex1 === randomIndex2) {
      randomIndex2 = generateRandom();
    }

    const randomCard1 = arr[randomIndex1];
    const randomCard2 = arr[randomIndex2];

    const updatedArr = arr.filter(
      (card) => card.id !== randomCard1.id && card.id !== randomCard2.id
    );

    setCard1(randomCard1);
    setCard2(randomCard2);

    setCards(updatedArr);

    setWinner(null);
    setEndRound(false);
  };

  const handleChoice = (c: Card) => {
    const chosenCard = c.id === card1?.id ? card1 : card2;
    const winner =
      card1?.cardmarket.prices.averageSellPrice! >
      card2?.cardmarket.prices.averageSellPrice!
        ? card1
        : card2;

    if (chosenCard?.id === winner?.id) {
      setCorrect((prev) => prev + 1);
    } else {
      setIncorrect((prev) => prev + 1);
    }

    setWinner(winner);
    setEndRound(true);
  };

  useEffect(() => {
    randomSelect(cards);
  }, []);

  return (
    <div className="game">
      {over ? (
        <div className="score">
          <div className="title">
            <h1>Congratulations </h1>
            <h1>you are the best!</h1>
          </div>
          <div className="headline">
            <h2 className="title">Your Score!</h2>
            <ul>
              <li className="headline">Correct - {correct}</li>
              <li className="headline">Incorrect - {incorrect}</li>
            </ul>
          </div>
        </div>
      ) : (
        card1 &&
        card2 && (
          <div className="cards">
            <h1 className="title">Choose the most expensive card</h1>
            <div className="container">
              <CardContainer
                content={card1}
                endRoundState={[endRound, setEndRound]}
                winnerState={[winner, setWinner]}
                handler={handleChoice}
              />

              <div className="dashboard">
                <div className="icons correct">
                  <p>{correct}</p>
                  <FaCheckCircle className="icon" />
                </div>

                <h1 className="icon-text">Click to</h1>
                <img
                  src="public/pokeball.webp"
                  alt="Pokeball"
                  className="icon-versus"
                  onClick={() => randomSelect(cards)}
                />
                <h1 className="icon-text">next battle</h1>

                <div className="icons incorrect">
                  <p>{incorrect}</p>
                  <FaTimesCircle className="icon" />
                </div>
              </div>

              <CardContainer
                content={card2}
                endRoundState={[endRound, setEndRound]}
                winnerState={[winner, setWinner]}
                handler={handleChoice}
              />
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
      </div>
    </div>
  );
};

export default Game;

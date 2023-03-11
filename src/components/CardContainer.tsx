import "./card-container.css";

interface CardProps {
  content: Card;
  endRoundState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  winnerState: [Card | null, React.Dispatch<React.SetStateAction<Card | null>>];
  handler: (c: Card) => void;
}

const CardContainer: React.FC<CardProps> = ({
  content,
  endRoundState,
  winnerState,
  handler,
}) => {
  const [endRound, setEndRound] = endRoundState;
  const [winner, setWinner] = winnerState;

  return (
    <div
      className="card"
      onClick={() => {
        if (!endRound) {
          handler(content);
        }
      }}
    >
      <div className={`header ${winner && winner?.id === content.id}`}>
        € {!endRound ? "????" : content.cardmarket.prices.averageSellPrice}
      </div>
      <div className="content">
        <img
          src={content.images.large}
          alt={content.name}
          className="card-image"
        />
      </div>
    </div>
  );
};

export default CardContainer;

import "./card-container.css";

interface CardProps {
  content: Card;
  handler: (c: Card) => void;
}

const CardContainer: React.FC<CardProps> = ({ content, handler }) => {
  return (
    <div className="card" onClick={() => handler(content)}>
      <div className="header">
        € {content.cardmarket.prices.averageSellPrice}
      </div>
      <div className="content">
        <img
          src={content.images.large}
          alt="pokemon-image"
          className="card-image"
        />
      </div>
    </div>
  );
};

export default CardContainer;

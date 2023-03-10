interface Card {
  id: string;
  name: string;
  images: {
    large: string;
  };
  cardmarket: {
    url: string;
    prices: {
      averageSellPrice: number;
    };
  };
}

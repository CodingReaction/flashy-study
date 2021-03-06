import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import {
  CardData,
  CardDataUpdatable,
  CARD_STATE,
  CARD_FACE,
} from "./Card.types";

import "./Card.styles.css";
import { SERVER_URL } from "../../globalConfig";

const CardTitle = ({
  cardState,
  data,
  updateData,
}: {
  cardState: CARD_STATE;
  data: string;
  updateData: (newData: string) => void;
}) => {
  if (cardState === CARD_STATE.EDITABLE)
    return (
      <input
        type="text"
        value={data}
        onChange={(ev) => updateData(ev.target.value)}
      />
    );
  return <h2>{data}</h2>;
};
const CardTag = () => {
  return <p>Tag</p>;
};

const CardContent = ({ cardState }: { cardState: CARD_STATE }) => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto sed
      blanditiis dolore optio itaque recusandae possimus, ea totam ipsa
      praesentium velit consectetur exercitationem repellendus natus incidunt
      reprehenderit nam nisi.
    </div>
  );
};

const CardReversal = () => {
  return <div>Card reversal</div>;
};

const CardsDisplay = () => {
  const [cardState, setCardState] = useState(CARD_STATE.EDITABLE);
  const [cardFace, toggleCardFace] = useState(CARD_FACE.FRONT);
  const {
    isLoading,
    error,
    data: cardsData,
  } = useQuery("cardsData", () => {
    return axios.get(SERVER_URL + "/card").then((res) => res.data);
  });

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="cards-container">
      {cardsData?.map((cardData: CardData) => (
        <Card
          key={cardData.id}
          cardData={cardData}
          cardState={cardState}
          cardFace={cardFace}
        />
      ))}
      <button
        className="flip-cards-button"
        onClick={() =>
          toggleCardFace((prevFace) =>
            prevFace === CARD_FACE.FRONT ? CARD_FACE.BACK : CARD_FACE.FRONT
          )
        }
      >
        Flip
      </button>
    </div>
  );
};

const Card = ({
  cardData,

  cardState,
  cardFace,
}: {
  cardData: CardData;
  cardState: CARD_STATE;
  cardFace: CARD_FACE;
}) => {
  return (
    <div className="card">
      {cardFace === CARD_FACE.FRONT ? (
        <>
          <CardTitle
            key={cardData.id}
            cardState={cardState}
            data={cardData.title}
            updateData={(newData) => {}}
          />
          <CardContent cardState={cardState} />
        </>
      ) : (
        <CardReversal />
      )}
    </div>
  );
};

export { Card, CardsDisplay };

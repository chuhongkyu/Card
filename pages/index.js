import Image from "next/image";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { motion } from "framer-motion";

const style = css`
  .card_box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 10px;
  }
`;

const cardList = [
  {
    id: 101,
    type: 1,
    bg_Img: "/img/cass_01.jpeg",
    backState: true,
  },
  {
    id: 102,
    type: 2,
    bg_Img: "/img/cass_02.jpeg",
    backState: true,
  },
  {
    id: 103,
    type: 3,
    bg_Img: "/img/cass_03.jpeg",
    backState: true,
  },
  {
    id: 104,
    type: 4,
    bg_Img: "/img/cass_04.jpeg",
    backState: true,
  },
  {
    id: 105,
    type: 5,
    bg_Img: "/img/cass_05.jpeg",
    backState: true,
  },
  {
    id: 106,
    type: 6,
    bg_Img: "/img/cass_06.jpeg",
    backState: true,
  },
  {
    id: 107,
    type: 1,
    bg_Img: "/img/cass_01.jpeg",
    backState: true,
  },
  {
    id: 108,
    type: 2,
    bg_Img: "/img/cass_02.jpeg",
    backState: true,
  },
  {
    id: 109,
    type: 3,
    bg_Img: "/img/cass_03.jpeg",
    backState: true,
  },
  {
    id: 110,
    type: 4,
    bg_Img: "/img/cass_04.jpeg",
    backState: true,
  },
  {
    id: 111,
    type: 5,
    bg_Img: "/img/cass_05.jpeg",
    backState: true,
  },
  {
    id: 112,
    type: 6,
    bg_Img: "/img/cass_06.jpeg",
    backState: true,
  },
];

const Home = () => {
  const [cards, setCards] = useState(cardList);
  const [picks, setPicks] = useState([]);

  const onClick = (e) => {
    const id = e.target.id;
    setCards(
      cards.map((card) =>
        card.id == id ? { ...card, backState: !card.backState } : card
      )
    );
    setPicks([...picks, id]);
  };

  return (
    <>
      <div>
        <h1>
          첫번째 :{picks[0]} 두번째 : {picks[0]}
        </h1>
      </div>
      <div className="card_box">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            id={card.id}
            style={
              card.backState
                ? {
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    border: "1px solid black",
                  }
                : {
                    backgroundColor: "black",
                    width: "100%",
                    height: "100%",
                    border: "1px solid black",
                  }
            }
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            exit={{ rotateY: 0 }}
            onClick={onClick}
          >
            {card.backState ? (
              <Image width={100} height={100} src={card.bg_Img} alt={card.id} />
            ) : null}
          </motion.div>
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Home;

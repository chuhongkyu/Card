import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { motion } from "framer-motion";
import Image from "next/image";

const style = css`
  .card_box {
    display: grid;
    grid-template-columns: repeat(4, minmax(50px, auto));
    grid-auto-rows: auto;
    gap: 10px;
  }
  .card {
    grid-column: span 1;
    width: 100%;
    height: 150px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .front {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 25px;
  }
  @keyframes rotation {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(180deg);
    }
  }

  .flipp_first {
    animation: rotation 3s 0.5s ease-in-out normal forwards;
  }

  .flipp_front {
    animation: rotation 1s 0.5s ease-in-out normal forwards;
  }

  .flipp_back {
    animation: rotation 1s 0.5s ease-in-out reverse forwards;
  }
`;

const cardList = [
  {
    id: 101,
    backState: true,
    clear: false,
  },
  {
    id: 102,
    backState: true,
    clear: false,
  },
  {
    id: 103,
    backState: true,
    clear: false,
  },
  {
    id: 104,
    backState: true,
    clear: false,
  },
  {
    id: 105,
    backState: true,
    clear: false,
  },
  {
    id: 106,
    backState: true,
    clear: false,
  },
  {
    id: 201,
    backState: true,
    clear: false,
  },
  {
    id: 202,
    backState: true,
    clear: false,
  },
  {
    id: 203,
    backState: true,
    clear: false,
  },
  {
    id: 204,
    backState: true,
    clear: false,
  },
  {
    id: 205,
    backState: true,
    clear: false,
  },
  {
    id: 206,
    backState: true,
    clear: false,
  },
];

const Order = () => {
  //카드 리스트이다
  const [cards, setCards] = useState(cardList);
  //animation
  const [flipp, setFlipp] = useState("flipp_first");
  //클릭
  const onClick = (e) => {
    const id = e.target.id;
    console.log("클릭", e.target.id);
    e.stopPropagation();
    setCards(
      cards.map((card) =>
        card.id == id ? { ...card, backState: !card.backState } : card
      )
    );
  };

  //전체 카드 뒤집기
  const onhandle = () => {
    console.log("뒤집기");
    setCards(
      cards.map((card) => (card.id ? { ...card, backState: false } : card))
    );
  };

  useEffect(() => {
    const timer = setTimeout(onhandle, 2000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   setFlipp("flipp_front");
  //   return setTimeout(() => {
  //     setFlipp("flipp_back");
  //   }, 3000);
  // }, []);

  return (
    <div>
      <div className="card_box">
        {cards.map((card, index) => (
          <div
            className={`card ${flipp}`}
            key={card.id}
            id={card.id}
            onClick={onClick}
          >
            {card.backState ? (
              <div className="front">{index + 1}</div>
            ) : (
              <Image
                width={"100%"}
                height={"100%"}
                src="/img/default.jpeg"
                alt={card.id}
              />
            )}
          </div>
        ))}
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Order;

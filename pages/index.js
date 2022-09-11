import Image from "next/image";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { motion } from "framer-motion";

// 카드를 선택해서 id가 같으면 "성공"
// 카드를 선택해서 id가 틀리면 "실패"

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
    bg_Img: "/img/cass_01.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 102,
    bg_Img: "/img/cass_02.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 103,
    bg_Img: "/img/cass_03.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 104,
    bg_Img: "/img/cass_04.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 105,
    bg_Img: "/img/cass_05.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 106,
    bg_Img: "/img/cass_06.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 201,
    bg_Img: "/img/cass_01.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 202,
    bg_Img: "/img/cass_02.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 203,
    bg_Img: "/img/cass_03.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 204,
    bg_Img: "/img/cass_04.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 205,
    bg_Img: "/img/cass_05.jpeg",
    backState: true,
    clear: false,
  },
  {
    id: 206,
    bg_Img: "/img/cass_06.jpeg",
    backState: true,
    clear: false,
  },
];

const Home = () => {
  //카드 리스트이다
  const [cards, setCards] = useState(cardList);
  //카드 선택 칸이다
  const [picks, setPicks] = useState([]);

  //카드 선택 이벤트
  const onClick = (e) => {
    //카드의 아이디 선택
    const id = e.target.id;
    e.stopPropagation();
    console.log(id);
    //선택 카드의 아이디와 같으면 뒤집고(backState) 아니면 다시 뿌리기
    setCards(
      cards.map((card) =>
        card.id == id ? { ...card, backState: !card.backState } : card
      )
    );
    //선택 칸의 길이가 2가 넘으면 []초기화 해주기
    if (picks.length >= 2) {
      setPicks([]);
      //카드 중 clear가 실패면 앞면으로(backState) 아니면 다시 뿌리기
      setCards(
        cards.map((card) =>
          card.clear === false ? { ...card, backState: true } : card
        )
      );
      console.log(picks);
    }
    // pick에 배열 0과 1이 같거나, null이 아니면 성공이고 선택을 초기화 시켜
    else if (picks[0] === picks[1] && !picks[1] == null) {
      setPicks([]);
      console.log("clear");
    } else {
      setPicks([...picks, id]);
      console.log(picks);
    }
  };

  return (
    <>
      <div>
        <h1>
          첫번째 :{picks[0]} 두번째 : {picks[1]}
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
                    backgroundImage: `url(${card.bg_Img})`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100px",
                    border: "1px solid black",
                  }
                : {
                    backgroundImage: `url(/img/default.jpeg)`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100px",
                    border: "1px solid black",
                  }
            }
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            exit={{ rotateY: 0 }}
            onClick={onClick}
          ></motion.div>
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Home;

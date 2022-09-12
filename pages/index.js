import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  //카드 선택 칸이다
  const [picks, setPicks] = useState([]);

  //카드 리스트이다
  const [cards, setCards] = useState(cardList);

  //카드 선택 이벤트
  const onClick = (e) => {
    //카드의 아이디 선택
    const id = e.target.id;
    gameRule(id);
    e.stopPropagation();
    //선택 카드의 아이디와 같으면 뒤집고(backState) 아니면 다시 뿌리기
    setCards(
      cards.map((card) =>
        card.id == id ? { ...card, backState: !card.backState } : card
      )
    );
    console.log("클릭 카드:", id);
  };

  const gameRule = (id) => {
    // 선택 하기
    setPicks([...picks, id]);
  };

  //state는 비동기적으로 일어남
  useEffect(() => {
    //선택칸이 2개 보다 크면
    if (picks.length >= 2) {
      console.log("검사");
      if (
        String(picks[0]).substr(-1) === String(picks[1]).substr(-1) &&
        picks[1] !== undefined
      ) {
        //카드들
        setCards(
          cards.map((card) =>
            String(card.id).substr(-1) === String(picks[1]).substr(-1)
              ? { ...card, clear: true }
              : card
          )
        );
        //초기화
        setPicks([]);
        console.log("성공");
      }
      //실패
      else {
        //다시 뒤집어
        setCards(
          cards.map((card) =>
            card.clear === false ? { ...card, backState: false } : card
          )
        );
        //초기화
        setPicks([]);
        console.log("실패");
      }
    }
    console.log(cards);
  }, [picks]);

  useEffect(() => {}, []);

  //전체 카드 뒤집기
  const onhandle = () => {
    console.log("뒤집기");
    setCards(
      cards.map((card) => (card.id ? { ...card, backState: false } : card))
    );
  };

  useEffect(() => {
    const timer = setTimeout(onhandle(), 3000);
    return () => clearTimeout(timer);
  }, []);

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

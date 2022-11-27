import Fruit from 'components/Fruit';
import Layout from 'components/Layout'
import Clock from 'components/Clock'
import InfoTime from 'components/InfoTime'
import { motion } from 'framer-motion';
import { MouseEvent, useEffect, useState } from 'react';
import styles from "styles/Game.module.scss"
import { useStopwatch } from "react-timer-hook";
import Menu from 'components/Menu';

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Ifruit {
  id: string;
  state: string,
  index: number;
  clear: boolean,
  fail: boolean,
}

interface Ipick {
  id: string;
  index: number;
}

export default function Game() {
  const [start, setStart] = useState(false);
  const [game, setGame] = useState(false);
  // const [fail, setFail] = useState(false);
  const [timer, setTimer] = useState(false);
  const [late, setLate] = useState(false);

  const [menu, setMenu] = useState(false);
  const [random, setRandom] = useState<number[]>([]);
  const [fruits, setFruit] = useState<Ifruit[]>([]);
  const [number, setNumber] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  const [picks, setPicks] = useState<Ipick[]>([]);

  //timer가 뜨는 시간 설정
  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setLate(true);
      }, 500);
    }
  }, [timer]);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setStart(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  //랜덤 배열 생성
  const makeRandom = (array:number[]) => {
    array.sort(() => Math.random() - 0.5);
    setRandom(array);
  };

  // 랜덤 배열을 통한 아이디 및 index넘버 설정
  useEffect(() => {
    setFruit([
      {
        id: "001",
        state: "front",
        index: random[0],
        clear: false,
        fail: false,
      },
      {
        id: "002",
        state: "front",
        index: random[1],
        clear: false,
        fail: false,
      },
      {
        id: "003",
        state: "front",
        index: random[2],
        clear: false,
        fail: false,
      },
      {
        id: "004",
        state: "front",
        index: random[3],
        clear: false,
        fail: false,
      },
      {
        id: "005",
        state: "front",
        index: random[4],
        clear: false,
        fail: false,
      },
      {
        id: "006",
        state: "front",
        index: random[5],
        clear: false,
        fail: false,
      },
      {
        id: "007",
        state: "front",
        index: random[6],
        clear: false,
        fail: false,
      },
      {
        id: "008",
        state: "front",
        index: random[7],
        clear: false,
        fail: false,
      },
      {
        id: "009",
        state: "front",
        index: random[8],
        clear: false,
        fail: false,
      },
      {
        id: "010",
        state: "front",
        index: random[9],
        clear: false,
        fail: false,
      },
      {
        id: "011",
        state: "front",
        index: random[10],
        clear: false,
        fail: false,
      },
      {
        id: "012",
        state: "front",
        index: random[11],
        clear: false,
        fail: false,
      },
      {
        id: "013",
        state: "front",
        index: random[12],
        clear: false,
        fail: false,
      },
      {
        id: "014",
        state: "front",
        index: random[13],
        clear: false,
        fail: false,
      },
      {
        id: "015",
        state: "front",
        index: random[14],
        clear: false,
        fail: false,
      },
      {
        id: "016",
        state: "front",
        index: random[15],
        clear: false,
        fail: false,
      },
      {
        id: "017",
        state: "front",
        index: random[16],
        clear: false,
        fail: false,
      },
      {
        id: "018",
        state: "front",
        index: random[17],
        clear: false,
        fail: false,
      },
      {
        id: "019",
        state: "front",
        index: random[18],
        clear: false,
        fail: false,
      },
      {
        id: "020",
        state: "front",
        index: random[19],
        clear: false,
        fail: false,
      },
    ]);
  }, [number]);

  useEffect(() => {
    setNumber(nums);
  }, [nums]);

  useEffect(() => {
    makeRandom(number);
  }, [start]);

  //전체 뒤집기 5500
  useEffect(() => {
    const timer = setTimeout(onAllChange, 5500);
    return () => clearTimeout(timer);
  }, [start]);

  //게임 true 일때만 전체 뒤집기
  const onAllChange = () => {
    if (start) {
      setGame(true);
      setTimer(true);
      reset();
      setFruit(
        fruits.map((fruit) =>
        fruit.state === "front" ? { ...fruit, state: "back" } : fruit
        )
      );
    }
  };

  //클릭
  const onClick = (e:MouseEvent<HTMLElement>) => {
    const cardIndex = e.currentTarget.getAttribute('data-index');
    const id = e.currentTarget.id;
    const pickCard :Ipick = { id: id , index: Number(cardIndex)}
    console.log("타겟 :", cardIndex);
    gameRule(pickCard);
    setFruit(
      fruits.map((fruit) => (fruit.id == id ? { ...fruit, state: "front" } : fruit))
    );
  };

  const gameRule = (value:Ipick) => {
    // 선택 하기
    setPicks([...picks, value]);
  };

  useEffect(() => {
    if (picks.length >= 2) {
      //게임 룰
      onWaitRule();
      if (picks[0].id !== picks[1].id && picks[0].index == picks[1].index) {
        //카드들
        setFruit(
          fruits.map((fruit) =>
            fruit.index == picks[0].index
              ? { ...fruit, clear: true, state: "front", fail: false }
              : fruit
          )
        );
        //초기화
        setPicks([]);;
      }

      //실패
      else {
        //다시 뒤집어 800
        onWarning();
        const timer = setTimeout(() => {
          setFruit(
            fruits.map((fruit) =>
              fruit.clear === false ? { ...fruit, fail: false } : fruit
            )
          );
        }, 800);
        onReChange();
        //초기화
        setPicks([]);
      }
    }
  }, [picks]);


  //유저가 Pick 2이상 클릭 방지 // 1050 이것보다 길면 안됨
  const onWaitRule = () => {
    setGame(false);
    setTimeout(() => {
      setGame(true);
    }, 1050);
  };

  //다시 뒤집기 1000
  const onReChange = () => {
    const timer = setTimeout(() => {
      setFruit(
        fruits.map((fruit) =>
        fruit.clear === false ? { ...fruit, state: "back" } : fruit
        )
      );
    }, 1000);
  };

  //경고 600
  const onWarning = () => {
    setTimeout(() => {
      setFruit(
        fruits.map((fruit) =>
          fruit.state === "front" && !fruit.clear ? { ...fruit, fail: true } : fruit
        )
      );
    }, 500);
  };

  //성공 여부 체크
  const onSuccess = () => {
    const result = fruits.find(function isClear(e) {
      return e.clear === false;
    });
    // console.log("결과: ", result);
    if (result === undefined && start === true) {
      // console.log("게임 클리어");
      onEndGame();
      pause();
    } else {
      // console.log("게임 진행중");
    }
  };

  //end 게임 종료를 늦춤
  const onEndGame = () => {
    setTimeout(() => {
      setMenu(true);
      setStart(false);
    }, 1000);
  };

  //게임 클리어 체크
  useEffect(() => {
    onSuccess();
  }, [fruits]);

  //다시 시작
  const reStart = () => {
    setStart(true);
    setGame(false)
    setMenu(false);
    reset();
    setTimer(false);
    setNumber(nums);
    setFruit(
      fruits.map((fruit) =>
        fruit.id ? { ...fruit, state: "front", clear: false, fail: false } : fruit
      )
    );
  };

  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds());
  const { seconds, minutes, isRunning, pause, reset } = useStopwatch({
    autoStart: false,
    offsetTimestamp: stopwatchOffset,
  });

  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return (
    <Layout>
        <motion.div id={styles.game_section}>
            <h1 className={styles.title}>Game</h1>
            {start ? <motion.div 
              className={styles.container}
              style={game ? {}:{pointerEvents: "none"}}
            >
                {fruits.map((fruit)=>{
                    return (
                        <motion.div 
                          key={fruit.id}
                          id={fruit.id}
                          data-index={fruit.index}
                          onClick={onClick}
                          animate={fruit.fail ? {rotateZ:180}:{}}
                        >
                          <Fruit
                              index={fruit.index}
                              state={fruit.state}
                              clear={fruit.clear}
                              fail={fruit.fail}
                          />
                        </motion.div>
                        )
                    })
                }
            </motion.div> : null}
        </motion.div>
        {timer ? 
          <Clock minute={minuteTime} second={secondTime} />:
          <InfoTime />
        }
        {menu ? <Menu min={minuteTime} sec={secondTime} func={reStart} />: null }
    </Layout>
  )
}
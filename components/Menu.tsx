import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styles from "styles/Game.module.scss"
import { scoreState } from "utils/atom";

interface Iprop {
    min:string;
    sec:string;
    func: (event: React.MouseEvent<HTMLElement>) => void;
}

interface IHighTime {
    first?: boolean;
    min: number;
    sec: number;
}

export default function Menu({min,sec,func}:Iprop) {
    const router = useRouter()

    const [highScore, setHighScore] = useRecoilState(scoreState);
    
    const [score, setScore] = useState<IHighTime>({ min : 0, sec: 0});

    useEffect(()=>{
        setScore({first: highScore.first, min : parseInt(min), sec: parseInt(sec)})
    },[])

    useEffect(() => {
        if(score.sec < highScore.sec){
            setHighScore((prevState) => ({...prevState, min : score.min, sec: score.sec}))
            localStorage.setItem("scoreState", JSON.stringify({first: false, min : score.min, sec: score.sec}))
            console.log('초')
        }else if(score.min < highScore.min){
            setHighScore((prevState) => ({...prevState, min : score.min, sec: score.sec}))
            localStorage.setItem("scoreState", JSON.stringify({first: false, min : score.min, sec: score.sec}))
            console.log('분')
        }else{
            console.log('안됨')
            localStorage.setItem("scoreState", JSON.stringify({first: false, min : score.min, sec: score.sec}))
        }
        
    }, [score])

    const reStart = () =>{
      router.push('/home')
    }
    return(
        <motion.div 
            id={styles.Menu}
            initial={{y:500}}
            animate={{y:[500, 0], scaleY:[0.6,1], opacity:[0,1]}}
        >
            <div className={styles.mask}></div>
            <div className={styles.info}>
                <h1>Game Over</h1>
                <div className={styles.time}>
                    <p>기록 : {min}:{sec}</p>
                    {!score.first ? <p> 최고 기록 : {score.min}: {score.sec}</p> : null}
                </div>
                <span onClick={reStart}>Home !</span>
                <span onClick={func}>ReStart !</span>
            </div>
        </motion.div>

    )
}
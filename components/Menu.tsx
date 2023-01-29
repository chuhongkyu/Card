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

export default function Menu({min,sec,func}:Iprop) {
    const router = useRouter()

    const [highScore, setHighScore] = useRecoilState(scoreState);
    
    const [score, setScore] = useState<number>(0);

    function onHandle(){
        setScore(parseInt(min + sec))
    }

    useEffect(()=>{
        onHandle()
    },[])

    useEffect(() => {
        if(score > highScore){
            setHighScore(score)
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
                <div>
                    <p>END : {min}:{sec}</p>
                    <p>Score : {score}</p>
                </div>
                <span onClick={reStart}>Home !</span>
                <span onClick={func}>ReStart !</span>
            </div>
        </motion.div>

    )
}
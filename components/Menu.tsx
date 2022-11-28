import { motion } from "framer-motion"
import { useRouter } from "next/router"
import styles from "styles/Game.module.scss"

interface Iprop {
    min:string;
    sec:string;
    func: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Menu({min,sec,func}:Iprop) {
    const router = useRouter()
  
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
                <p>Score {min}:{sec}</p>
                <span onClick={reStart}>Home !</span>
                <span onClick={func}>ReStart !</span>
            </div>
        </motion.div>

    )
}
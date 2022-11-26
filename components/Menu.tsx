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
      router.push('home/')
    }
    return(
        <div id={styles.Menu}>
            <h1>종료</h1>
            <p>{min}:{sec}</p>
            <span onClick={reStart}>처음으로</span>
            <span onClick={func}>다시시작</span>
        </div>

    )
}
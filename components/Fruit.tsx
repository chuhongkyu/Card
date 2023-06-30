import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "styles/Game.module.scss"

interface Ifruit {
    state: string;
    index: number;
    clear: boolean;
}

const frontList:any = {
    0: "/assets/img/00.svg",
    1: "/assets/img/01.svg",
    2: "/assets/img/02.svg",
    3: "/assets/img/03.svg",
    4: "/assets/img/04.svg",
    5: "/assets/img/05.svg",
    6: "/assets/img/06.svg",
    7: "/assets/img/07.svg",
    8: "/assets/img/08.svg",
    9: "/assets/img/09.svg",
  };

const Fruit = ({ index, clear, state}:Ifruit) =>{
    const router = useRouter()
    const [destory, setDestory] = useState(clear);

    const onDestory = () => {
        if (clear) {
          setDestory(true);
        }
    };

    useEffect(() => {
        const timer = setTimeout(onDestory, 900);
        return () => clearTimeout(timer);
    }, [clear]);

    useEffect(()=>{
        // console.log(router.query)
    },[])
    
    return (
        <>
            {
                destory ? null :
                (
                    <motion.div 
                        className={styles.fruit} 
                        data-index={index}
                        initial={{rotateY: 0}}
                        animate={state === "front" ? {rotateY: 0}: {rotateY: 180}}
                        transition={{duration: 0.5}}
                    >
                        <div className={styles.__front}>
                            <img src={frontList[index]} alt={index+""} />
                        </div>
                        <div className={styles.__back}>
                            {router.query.hint ? index : null}
                        </div>
                    </motion.div>
                )
            }
        </>
    )
}

Fruit.defaultProps = {
    index: 0,
    state: "front",
    clear: false,
  };

export default Fruit;
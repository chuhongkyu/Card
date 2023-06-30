import { motion } from "framer-motion"
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "styles/Home.module.scss"
import { recordState, scoreState } from "utils/atom";

export default function Record() {
    const [record, setRedcord] = useRecoilState(recordState);
    const highScore = useRecoilValue(scoreState);

    const onHandle = (e: React.MouseEvent<HTMLElement>)=>{
        setRedcord(!record)
        e.stopPropagation()
        if(window.document.body.classList.contains('lock')){
            window.document.body.classList.remove("lock")
            
        }else{
            window.document.body.classList.add("lock")
        }
    }

    return(
        <>
        <motion.div 
            className={styles.dim_bg}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            onClick={onHandle}
            exit={{opacity: 0}}
        >
            <motion.div
                className={styles.popup}
                initial={{y: "100%"}}
                animate={{y: 0}}
                transition={{duration: 0.3, delay: 0.5}}
            >
                <div className={styles.header}>
                    <h5 className={styles.title}>Best Record</h5>
                </div>
                
                <div className={styles.body}>
                    <p className={styles.record}><b>Best Record</b> : {highScore.min}:{highScore.sec}</p>
                    <span onClick={onHandle} className={styles.exit}>X</span>
                </div>
            </motion.div>
        </motion.div>
        
        </>
    )
}
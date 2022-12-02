import { motion } from "framer-motion";
import styles from "styles/Game.module.scss"

export default function InfoTime (){
    return(
        <motion.div
            id={styles.info_time_container}
            initial={{ y: 0 }}
        >
        <h2>start in 5 seconds</h2>
        <div className={styles.ready_count}>
          <motion.div
            className={styles.count_div}
            animate={{
              y:["0%", "-20%","-40%","-60%","-80%","-100%"],
              transition: { delay: 0.5, duration: 5, type: "spring" },
            }}
          >
            <span className={styles.text_count}>5</span>
            <span className={styles.text_count}>4</span>
            <span className={styles.text_count}>3</span>
            <span className={styles.text_count}>2</span>
            <span className={styles.text_count}>1</span>
          </motion.div>
        </div>
      </motion.div>
    )
}
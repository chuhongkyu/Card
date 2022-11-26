import styles from "styles/Game.module.scss"

interface IClock{
    minute: string;
    second: string;
}

export default function Clock ({minute, second}:IClock) {
    return(
        <div id={styles.time_container}>
          <h2>Timer</h2>
          <div className={styles.clock}>
            <span>{minute}</span>:<span>{second}</span>
          </div>
        </div>
    )
}
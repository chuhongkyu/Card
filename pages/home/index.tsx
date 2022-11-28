import Layout from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import styles from 'styles/Home.module.scss'

export default function Home() {
  const router = useRouter()

  const onStart = () =>{
    router.push('home/game')
  }

  return (
    <Layout>
      <div className={styles.setting_group}>
        <span>환경</span>
        <span>설정</span>
      </div>
      <div className={styles.text_group}>
        <div className={styles.center}>
          <p className={styles.description}>Do you like fruits?</p>
          <h1 className={styles.title}>Match<br/>the fruits!</h1>
        </div> 
      </div>
      <img className={styles.img_box} src="/assets/img/fruit.jpeg" alt="fruits"/>
      <div className={styles.btn_group}>
        <motion.span className={styles.btn_start} onClick={onStart}>start !</motion.span>
        <motion.span className={styles.btn_tutorial}>tutorial !</motion.span>
      </div>
    </Layout>
  )
}

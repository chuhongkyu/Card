import Layout from 'components/Layout'
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
      <div className={styles.btn_group}>
        <span className={styles.btn_start} onClick={onStart}>start !</span>
        <span className={styles.btn_tutorial}>tutorial !</span>
      </div>
    </Layout>
  )
}

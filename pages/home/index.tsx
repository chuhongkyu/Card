import Layout from 'components/Layout'
import Record from 'components/Record'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styles from 'styles/Home.module.scss'
import { recordState, scoreState } from 'utils/atom'

export default function Home() {
  const router = useRouter()
  const [highScore, setHighScore] = useRecoilState(scoreState);
  const [record, setRedcord] = useRecoilState(recordState);


  const onStart = () =>{
    router.push('home/game')
  }

  const onOpenRecord = () =>{
    setRedcord(!record)
  }

  useEffect(() => {
    let high = localStorage.getItem('scoreState');
    if(high){
      setHighScore(JSON.parse(high))
    }else{
      setHighScore({first : true, min: 0, sec: 0})
    }
  }, [])

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
        <motion.span className={styles.btn_tutorial} onClick={onOpenRecord}>record !</motion.span>
      </div>
      {record ? <Record/> : null}
    </Layout>
  )
}

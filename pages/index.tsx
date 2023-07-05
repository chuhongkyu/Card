import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from 'styles/Layout.module.scss'
import Layout from "components/Layout"

export default function Intro() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(()=> router.push('home'), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
      <motion.div id={styles.intro}>
        <div className={styles.intro_box}>
            <div className={styles.intro_border}>
                <div className={styles.intro_inner}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
        </div>
      </motion.div>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from 'styles/Layout.module.scss'

const Variants = {
  initial:{
    rotateZ: 0
  },
  animate:{
    scale: [1.2, 1],
    rotateZ: [0, 360],
    transition:{
      duration: 1.3,
      type: "spring"
    }
  },
  exit:{
    opacity: [1, 0]
  }
  
}


export default function Intro() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(()=> router.push('home'), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      <div id={styles.intro}>
        <motion.div variants={Variants} initial="initial" animate="animate" exit="exit" className={styles.intro_img}>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

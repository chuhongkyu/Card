import styles from 'styles/Layout.module.scss'
import {ReactNode} from 'react'
import { motion } from 'framer-motion';

type LayoutComponent = {
    children: ReactNode;
}

export default function Layout( {children}:LayoutComponent) {
    return (
      <motion.div className={styles.section} initial={{opacity:0}} animate={{opacity:[0,1]}}>
        {children}
      </motion.div>
    );
  }
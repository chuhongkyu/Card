import styles from 'styles/Layout.module.scss'
import {ReactNode} from 'react'

type LayoutComponent = {
    children: ReactNode;
}

export default function Layout( {children}:LayoutComponent) {
    return (
      <div className={styles.section}>
          {children}
      </div>
    );
  }
import styles from 'styles/Layout.module.scss'
import {ReactNode} from 'react'

type LayoutComponent = {
    children: ReactNode;
}

export default function Layout( {children}:LayoutComponent) {
    return (
      <div className={styles.section}>
          {children}
          <div className={styles.web}>
            모바일로 이용해주세요.
          </div>
      </div>
    );
  }
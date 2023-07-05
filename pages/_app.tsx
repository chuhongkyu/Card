import 'styles/globals.css'
import 'styles/_app.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { RecoilRoot } from "recoil";
import HeadComponent from 'components/HeadComponent'
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const onHandleResize = () =>  {
    const maxWidth = 656;
    let vw = Math.min(window.innerWidth, maxWidth) * 0.01;
    document.documentElement.style.setProperty('--uw', `${vw}px`);
    document.documentElement.style.setProperty('--100vh', `${window.innerHeight}px`);
  }

  useEffect(() => {
    onHandleResize()
    window.addEventListener('resize', onHandleResize);
    if(isMobile) {
      document.documentElement.style.setProperty('--landing-100vh', `${window.innerHeight}px`);
    }

    return () => {
      window.removeEventListener('resize', onHandleResize)
    }
  }, [])
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <RecoilRoot>
        <HeadComponent/>
        <Component {...pageProps} key={router.pathname} />
      </RecoilRoot>
    </AnimatePresence>
    )
}

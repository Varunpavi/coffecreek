import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import 'aos/dist/aos.css';
import { NextPage } from 'next';
import React, { useEffect } from 'react';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const authProps = Component.authenticate;

  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //     // once: true,
  //   });
  // }, [])


  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <div>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}

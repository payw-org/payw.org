import PageInfo from '@/components/PageInfo'
import '@/styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageInfo title="PAYW" description="Open Source Group" />
      <Head>
        <meta name="author" content="jhaemin" />
        <meta
          name="keywords"
          content="Open Source, 오픈소스, PAYW, 페이더블유, pay as you want"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function HeadComponent() {
  const router = useRouter()

  const metaData = {
    title: "Match the Fruit",
    description: "Match | match the same fruit",
    keywords: "Match · Fruit · Card · Orange · Game · Simple",
    imgsrc:
      "ttps://match-fruits-mrchu.vercel.app/",
    url: "ttps://match-fruits-mrchu.vercel.app/",
  };

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content="Match the Fruit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:site_name" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        {/* <meta property="og:image" content={metaData.imgsrc} /> */}
        <meta property="og:url" content={metaData.url} />

        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        {/* <meta name="twitter:image" content={metaData.imgsrc} /> */}
        <link rel="canonical" href={metaData.url} />
      </Head>

    </>
  )
}
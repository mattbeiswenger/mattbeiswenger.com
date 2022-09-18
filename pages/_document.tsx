import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <body className="bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

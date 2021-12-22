import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
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
          {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Redacted+Script&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="google-site-verification"
            content="cIF7EczaClpfmh9I1iDr-MS9SJDiNnK47yv0vsDy-l4"
          />
          <link rel="icon" href="/favicon-16x16.png" />
          <link rel="icon" href="/favicon-32x32.png" />
          <link rel="icon" href="/favicon-96x96.png" />
        </Head>
        <body className=" dark:bg-neutral-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

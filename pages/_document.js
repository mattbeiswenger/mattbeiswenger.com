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
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="google-site-verification" content="cIF7EczaClpfmh9I1iDr-MS9SJDiNnK47yv0vsDy-l4" />
          <link rel="icon" href="/favicon-16x16.png" />
          <link rel="icon" href="/favicon-32x32.png" />
          <link rel="icon" href="/favicon-96x96.png" />
        </Head>
        <body className="dark:bg-dark-grey">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import * as Fathom from 'fathom-client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('HMLMBPNT', {
      includedDomains: ['mattbeiswenger.com'],
    })
    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

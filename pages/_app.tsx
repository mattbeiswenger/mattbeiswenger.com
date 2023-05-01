import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import * as Fathom from 'fathom-client'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CommandPalette from '../components/CommandPalette'
import { CommandPaletteProvider } from '../contexts/command-palette'
import { Analytics } from '@vercel/analytics/react'

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

  const [open, setOpen] = useState(false)
  createContext([open, setOpen])

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <CommandPaletteProvider>
        <CommandPalette />
        <Analytics />
        <Component {...pageProps} />
      </CommandPaletteProvider>
    </ThemeProvider>
  )
}

export default MyApp

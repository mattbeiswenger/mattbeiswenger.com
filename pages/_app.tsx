import '../styles/global.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import CommandPalette from '../components/CommandPalette'
import { CommandPaletteProvider } from '../contexts/command-palette'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  createContext([open, setOpen])

  return (
    <CommandPaletteProvider>
      <CommandPalette />
      <Analytics />
      <Component {...pageProps} />
    </CommandPaletteProvider>
  )
}

export default MyApp

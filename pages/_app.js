import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MdxComponents'
import CommandPalette from '../components/CommandPalette'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <MDXProvider components={MDXComponents}>
        <CommandPalette />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp

import '@/styles/global.css'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MdxComponents'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp

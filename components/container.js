import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

export default function Container({ children, ...customMeta }) {
  const { theme, setTheme } = useTheme()

  const meta = {
    title: 'Matt Beiswenger',
    ...customMeta,
  }

  return (
    <div className="mb-32 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="mx-auto py-16 px-10 w-full max-w-4xl grid gap-10 grid-flow-col justify-end">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="max-w-3xl px-8 mx-auto">{children}</div>
    </div>
  )
}

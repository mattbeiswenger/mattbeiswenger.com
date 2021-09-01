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
    <div className="max-w-6xl m-auto mb-32 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex pt-16 pb-20">
        <Link href="/">
          <a className="text-2xl font-bold whitespace-nowrap logo">
            Matt Beiswenger
          </a>
        </Link>
        <nav className="flex items-center justify-end w-full gap-10 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  )
}

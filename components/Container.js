import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

export default function Container({ children, ...customMeta }) {
  const { resolvedTheme, setTheme } = useTheme()

  const meta = {
    title: 'Matt Beiswenger',
    ...customMeta,
  }

  return (
    <main className="max-w-6xl px-8 m-auto mb-32 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex pt-16 pb-20">
        <Link href="/">
          <a className="text-4xl font-bold cursor-pointer font-redacted whitespace-nowrap logo">
            matt
          </a>
        </Link>
        <nav className="flex items-center justify-end w-full gap-10 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
          <Link href="/blog">Blog</Link>
          <button
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
      <div className="max-w-4xl mx-auto">{children}</div>
    </main>
  )
}

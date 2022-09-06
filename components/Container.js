import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

export default function Container({ children, className, ...customMeta }) {
  const { resolvedTheme, setTheme } = useTheme()

  const meta = {
    title: 'Matt Beiswenger',
    ...customMeta,
  }

  return (
    <main className="px-8 m-auto mb-32 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex max-w-6xl py-10 mx-auto sm:py-16">
        <Link href="/">
          <a className="tracking-wider whitespace-nowrap text-neutral-500">
            MATT BEISWENGER
          </a>
        </Link>
        <nav className="flex items-center justify-end w-full gap-10 text-lg tracking-wide text-neutral-800 dark:text-white">
          <Link href="/blog">
            <a className="dark:text-neutral-200">Blog</a>
          </Link>
          <Link href="/photos">
            <a className="dark:text-neutral-200">Photos</a>
          </Link>
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
      <div className={`${className} max-w-4xl mx-auto`}>{children}</div>
    </main>
  )
}

import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Container({ children, className, ...customMeta }) {
  const { resolvedTheme, setTheme } = useTheme()

  const meta = {
    title: 'Matt Beiswenger',
    ...customMeta,
  }

  return (
    <main className="m-5 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      {/* <div className="fixed z-50 flex items-center w-full max-w-6xl px-6 py-10 transform -translate-x-1/2 rounded-lg left-1/2 bg-opacity-40 backdrop-blur-md top-10 sm:py-2 bg-neutral-700">
        <Link href="/">
          <a className="relative w-8 h-8 border rounded-full shadow-inner border-neutral-700 text-neutral-500">
            <Image
              className="rounded-full"
              src="/images/logo.jpeg"
              layout="fill"
              alt="Picture of me"
            />
          </a>
        </Link>
        <nav className="flex items-center justify-end w-full gap-2 text-sm tracking-wide text-neutral-800 dark:text-white">
          <Link href="/">
            <a className="px-4 py-2 rounded-md dark:text-neutral-200 hover:backdrop-blur-md">
              Home
            </a>
          </Link>
          <Link href="/timeline">
            <a className="px-4 py-2 rounded-md dark:text-neutral-200 hover:backdrop-blur-md">
              Activity
            </a>
          </Link>
          <Link href="/photos">
            <a className="px-4 py-2 rounded-md dark:text-neutral-200 hover:backdrop-blur-md">
              Photos
            </a>
          </Link>
          <Link href="/articles">
            <a className="px-4 py-2 rounded-md dark:text-neutral-200 hover:backdrop-blur-md">
              Articles
            </a>
          </Link>
          <button
            className="px-4 py-2 rounded-md dark:text-neutral-200 hover:bg-neutral-700"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </button>
        </nav>
      </div> */}
      <div className={`${className} mx-auto`}>{children}</div>
    </main>
  )
}

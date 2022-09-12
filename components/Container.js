import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'

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
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 mt-20 text-sm font-medium text-neutral-400">
          <div className="flex flex-col gap-5">
            <Link href="/activities">Activities</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/photos">Photos</Link>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="https://github.com/mattbeiswenger"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              GitHub
              <ArrowUpRightIcon className="w-3 h-3 stroke-neutral-300" />
            </a>
            <a
              href="https://twitter.com/mattbeiswenger"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              Twitter
              <ArrowUpRightIcon className="w-3 h-3 stroke-neutral-300" />
            </a>
            <a
              href="https://linkedin.com/in/mattbeiswenger"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              LinkedIn
              <ArrowUpRightIcon className="w-3 h-3 stroke-neutral-300" />
            </a>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="my-12 text-sm text-neutral-500">{`© Matt Beiswenger ${format(
            new Date(),
            'yyyy'
          )}`}</div>
          <div className="my-12 text-sm text-neutral-500">
            Built with{' '}
            <a
              href="https://nextjs.org/"
              className="font-medium text-neutral-400"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </a>
            , deployed on{' '}
            <a
              href="https://vercel.com/"
              className="font-medium text-neutral-400"
              target="_blank"
              rel="noreferrer"
            >
              ▲Vercel
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

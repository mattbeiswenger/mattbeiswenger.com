import Link from 'next/link'
import Head from 'next/head'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'

export default function Container({ children, className, ...customMeta }) {
  const meta = {
    title: 'Matt Beiswenger',
    ...customMeta,
  }

  return (
    <main
      className={`${className} max-w-2xl mx-auto antialiased mt-10 sm:mt-40 px-5 min-h-screen flex flex-col justify-between`}
    >
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="w-full mx-auto">{children}</div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-2 mt-20 text-sm font-medium text-neutral-400">
          <div className="flex flex-col gap-3 sm:gap-5">
            <Link href="/activities">Activities</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/photos">Photos</Link>
          </div>
          <div className="flex flex-col gap-3 sm:gap-5">
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
        <div className="flex flex-wrap justify-between my-12 text-xs sm:text-sm text-neutral-500">
          <span>{`© Matt Beiswenger ${format(new Date(), 'yyyy')}`}</span>
          <span>
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
          </span>
        </div>
      </div>
    </main>
  )
}

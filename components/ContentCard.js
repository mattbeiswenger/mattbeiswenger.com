import Date from '../components/Date'
import Link from 'next/link'

export default function ContentCard({ href, published, time, title }) {
  return (
    <Link href={href}>
      <a className="flex justify-between">
        <div className="font-medium">{title}</div>
        <Date className="text-sm text-neutral-400" dateString={published} />
      </a>
      {/* <a className="p-4 transition bg-white border dark:border-transparent dark:bg-neutral-800 rounded-xl">
        <div className="font-semibold sm:text-xl text-md text-neutral-800 dark:text-neutral-100">
          {title}
        </div>
        <div className="flex gap-2 mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          <Date dateString={published} />
          <div>&#x2022;</div>
          <div>{time}</div>
        </div>
      </a> */}
    </Link>
  )
}

import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentCard({ href, image, published, time, title }) {
  return (
    <Link href={href}>
      <a className="p-4 transition bg-white border-2 dark:border-transparent dark:bg-neutral-800 rounded-xl">
        <div className="sm:text-xl text-md font-medium text-neutral-800 dark:text-neutral-100">
          {title}
        </div>
        <div className="flex gap-2 mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          <Date dateString={published} />
          <div>&#x2022;</div>
          <div>{time}</div>
        </div>
      </a>
    </Link>
  )
}

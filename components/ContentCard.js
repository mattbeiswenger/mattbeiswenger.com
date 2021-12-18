import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentCard({ href, image, published, time, title }) {
  return (
    <Link href={href}>
      <a className="p-4 transition bg-white border-2 dark:border-transparent dark:bg-gray-800 rounded-xl ring-opacity-80 hover:ring-2 ring-offset-4 dark:ring-offset-gray-900 ring-red-400">
        <div className="rounded-xl responsive-image">
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className="flex gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
          <Date dateString={published} />
          <div>&#x2022;</div>
          <div>{time}</div>
        </div>
        <div className="mt-2 text-xl font-medium text-gray-800 dark:text-gray-100">
          {title}
        </div>
      </a>
    </Link>
  )
}

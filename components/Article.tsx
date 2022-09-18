import Date from './Date'
import Link from 'next/link'

type ArticleProps = {
  href: string
  published: string
  title: string
}

export default function Article({ href, published, title }: ArticleProps) {
  return (
    <Link href={href}>
      <a className="flex items-center justify-between gap-2">
        <div className="text-sm font-medium truncate text-neutral-300 sm:text-base">
          {title}
        </div>
        <Date
          className="text-xs sm:text-sm text-neutral-400 whitespace-nowrap"
          dateString={published}
        />
      </a>
    </Link>
  )
}

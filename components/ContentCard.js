import Date from '../components/Date'
import Link from 'next/link'

export default function ContentCard({ href, published, title }) {
  return (
    <Link href={href}>
      <a className="flex justify-between">
        <div className="font-medium">{title}</div>
        <Date className="text-sm text-neutral-400" dateString={published} />
      </a>
    </Link>
  )
}

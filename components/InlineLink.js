import Link from 'next/link'

export default function InlineLink({ url, children, newTab }) {
  const target = newTab && '_blank'
  const rel = newTab && 'noopener noreferrer'
  return (
    <Link href={url}>
      <a
        className="inline-block transition text-white duration-200 ease-in-out bg-gray-700 hover:bg-gray-600 py-0.5 px-1 text-sm rounded-md whitespace-no-wrap"
        target={target}
        rel={rel}
      >
        {children}
      </a>
    </Link>
  )
}

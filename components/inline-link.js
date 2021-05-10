import Link from 'next/link'

export default function InlineLink({ url, children, newTab }) {
  const target = newTab && '_blank'
  const rel = newTab && 'noopener noreferrer'
  return (
    <Link href={url}>
      <a
        className="inline-block transition duration-200 ease-in-out bg-light-grey hover:bg-light-grey-hover py-0.5 px-1 text-sm rounded-md whitespace-no-wrap"
        target={target}
        rel={rel}
      >
        {children}
      </a>
    </Link>
  )
}

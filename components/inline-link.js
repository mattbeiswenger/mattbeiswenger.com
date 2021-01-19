import Link from 'next/link'

function InlineLink({ url, children, newTab }) {
  const target = newTab && '_blank'
  const rel = newTab && 'noopener noreferrer'
  return (
    <Link
      className="inline-block transition duration-200 ease-in-out bg-light-grey hover:bg-light-grey-hover py-0.5 px-1 rounded-lg whitespace-no-wrap"
      href={url}
    >
      <a target={target} rel={rel}>
        {children}
      </a>
    </Link>
  )
}

export default InlineLink

import Link from 'next/link'

function InlineLink({ url, children }) {
  return (
    <Link
      className="inline-block transition duration-200 ease-in-out bg-light-grey hover:bg-light-grey-hover py-0.5 px-1 rounded-lg whitespace-no-wrap"
      href={url}
      passHref
    >
      <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  )
}

export default InlineLink

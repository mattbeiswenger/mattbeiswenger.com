import Link from 'next/link'

export default function Container({ children }) {
  return (
    <div className="bg-dark-grey fixed -inset-0">
      <div className="p-20 pt-10 grid">
        <Link href="/blog">
          <a className="text-white justify-self-end">Blog</a>
        </Link>
      </div>
      <div className="max-w-5xl px-20">{children}</div>
    </div>
  )
}

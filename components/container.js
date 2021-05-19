import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Container({ children }) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="mb-32 antialiased">
      <div className="p-20 pt-10 grid gap-12 grid-flow-col justify-end">
        <Link href="/">
          <a className="dark:text-white">Home</a>
        </Link>
        <Link href="/blog">
          <a className="dark:text-white">Blog</a>
        </Link>
        <button
          className="dark:text-white"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {theme === 'dark' ? (
              <>
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            )}
          </svg>
        </button>
      </div>
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  )
}

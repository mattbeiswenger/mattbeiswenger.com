import Code from '@/components/Code'
import Link from 'next/link'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const styles = 'text-pink-400'

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={styles} {...props}>
          {props.children}
        </a>
      </Link>
    )
  }

  return (
    <a
      className={styles}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

const MdxComponents = {
  inlineCode: ({ children }) => (
    <code className="px-1.5 py-1 text-sm dark:bg-one-dark bg-gray-200 rounded-md whitespace-nowrap dark:text-white">
      {children}
    </code>
  ),
  code: ({ className, children }) => {
    const languageMatch = className && className.match('language-([^{]+)')
    return (
      <div className="min-w-full my-8 overflow-hidden lg:w-full lg:rounded-lg">
        <Code language={languageMatch[1]}>{children}</Code>
      </div>
    )
  },
  ol: (props) => <ol className="mt-4 list-decimal list-inside" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc list-inside" {...props} />,
  li: (props) => <li className="mt-1" {...props} />,
  p: (props) => <p className="mt-4 lg:mt-6">{props.children}</p>,
  a: (props) => <CustomLink {...props} />,
  h2: (props) => (
    <h2 className="mt-10 text-3xl font-semibold">{props.children}</h2>
  ),
}

export default MdxComponents

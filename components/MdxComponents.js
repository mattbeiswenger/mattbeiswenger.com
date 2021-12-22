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
    <code className="px-1.5 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-md whitespace-nowrap dark:text-white">
      {children}
    </code>
  ),
  code: ({ className, children }) => {
    const languageMatch = className && className.match('language-([^{]+)')
    return (
      <div className="min-w-full my-8 overflow-hidden shadow-md shadow-neutral-200/50 dark:shadow-neutral-900/70 lg:w-full lg:rounded-xl">
        <Code language={languageMatch[1]}>{children}</Code>
      </div>
    )
  },
  ol: (props) => (
    <ol
      className="max-w-3xl mx-auto mt-4 list-decimal list-inside"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="max-w-3xl mx-auto mt-4 list-disc list-inside" {...props} />
  ),
  li: (props) => <li className="mt-1" {...props} />,
  p: (props) => (
    <p className="max-w-3xl mx-auto mt-4 leading-7 lg:mt-6 dark:text-neutral-300 md:leading-9">
      {props.children}
    </p>
  ),
  a: (props) => <CustomLink {...props} />,
  h2: (props) => (
    <h2 className="max-w-3xl mx-auto mt-10 text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
      {props.children}
    </h2>
  ),
}

export default MdxComponents

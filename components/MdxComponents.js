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
    <code className="px-1 py-px text-sm dark:bg-one-dark bg-gray-200 rounded whitespace-nowrap dark:text-white">
      {children}
    </code>
  ),
  code: ({ className, children }) => {
    const languageMatch = className && className.match('language-([^{]+)')
    return (
      <div className="my-8 -mx-8 md:mx-0 overflow-hidden md:rounded-lg">
        <Code language={languageMatch[1]}>{children}</Code>
      </div>
    )
  },
  hr: () => <hr className="mt-4 border-gray-200 lg:mt-6" />,
  ol: (props) => <ol className="pl-6 mt-4 list-decimal lg:mt-6" {...props} />,
  ul: (props) => <ul className="pl-6 mt-4 list-disc lg:mt-6" {...props} />,
  li: (props) => <li className="mt-2" {...props} />,
  p: (props) => <p className="mt-4 lg:mt-6">{props.children}</p>,
  a: (props) => <CustomLink {...props} />,
}

export default MdxComponents

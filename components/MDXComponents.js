import Code from '@/components/code'

const MDXComponents = {
  pre: (props) => <div {...props} />,
  code: ({ className, children }) => {
    const languageMatch = className && className.match('language-([^{]+)')
    return <Code language={languageMatch[1]}>{children}</Code>
  },
}

export default MDXComponents

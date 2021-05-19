import Code from '@/components/code'

const MdxComponents = {
  inlineCode: ({ children }) => (
    <code className="px-1 py-px text-sm dark:bg-one-dark bg-gray-200 rounded whitespace-nowrap dark:text-white">
      {children}
    </code>
  ),
  code: ({ className, children }) => {
    const languageMatch = className && className.match('language-([^{]+)')
    return (
      <div className="my-8 overflow-hidden sm:rounded-lg md:mx-auto">
        <Code language={languageMatch[1]}>{children}</Code>
      </div>
    )
  },
  hr: () => <hr className="mt-4 border-gray-200 lg:mt-6" />,
  ol: (props) => <ol className="pl-6 mt-4 list-decimal lg:mt-6" {...props} />,
  ul: (props) => <ul className="pl-6 mt-4 list-disc lg:mt-6" {...props} />,
  li: (props) => <li className="mt-2" {...props} />,
  p: (props) => <p className="mt-4 lg:mt-6">{props.children}</p>,
}

export default MdxComponents

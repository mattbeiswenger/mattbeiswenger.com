import Code from './Code'
import Link from 'next/link'
import React from 'react'
import { MDXComponents as MDXComponentsType } from 'mdx/types'

type AProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const CustomLink = (props: AProps) => {
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

// type ProvidedComponents = MDXComponentsType & {
//   code?: (args: { className: string; children: React.ReactNode }) => typeof Code
// }

// type ProvidedComponents = MDXComponentsType & {
//   code?: typeof Code
// }

const MdxComponents: MDXComponentsType = {
  code: (props) => {
    const languageMatch =
      props.className && props.className.match(/language-([^{]+)/)

    if (languageMatch) {
      return (
        <div className="min-w-full my-8 overflow-hidden lg:w-full lg:rounded-xl">
          <Code language={languageMatch[1]}>{props.children as string}</Code>
        </div>
      )
    }

    // Inline code
    return (
      <code className="px-1.5 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-md whitespace-nowrap dark:text-white">
        {props.children}
      </code>
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
  strong: (props) => <strong className="font-semibold" {...props}></strong>,
}

export default MdxComponents

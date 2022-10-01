import Link from 'next/link'
import React from 'react'
import { MDXComponents as MDXComponentsType } from 'mdx/types'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Callout from '../components/Callout'
import Code from '../components/Code'
import Sandpack from '../components/Sandpack'

type AProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const CustomLink = (props: AProps) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const MdxComponents: MDXComponentsType = {
  pre: ({ children }) => {
    return (
      // @ts-expect-error pre types are incorrect
      <Code language={children.props.className}>{children.props.children}</Code>
    )
  },
  Sandpack,
  Callout,
  a: (props) => <CustomLink {...props} />,
}

export default MdxComponents

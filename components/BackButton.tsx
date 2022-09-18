import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type BackButtonProps = {
  href: string
  children: React.ReactNode
}

export default function BackButton({ href, children }: BackButtonProps) {
  return (
    <Link href={href}>
      <a className="inline-flex items-center gap-1 text-sm group text-neutral-400">
        <ArrowLongLeftIcon className="w-4 h-4 text-sm transition-transform group-hover:-translate-x-1" />
        {children}
      </a>
    </Link>
  )
}

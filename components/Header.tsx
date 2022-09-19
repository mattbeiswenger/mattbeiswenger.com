import React from 'react'

type HeaderProps = {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return <div className="text-lg text-neutral-200">{children}</div>
}

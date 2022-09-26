/* eslint-disable react/display-name */
import { formatDistance } from 'date-fns'
import React from 'react'

type EventProps = {
  children: React.ReactNode
}

function Event({ children }: EventProps) {
  return (
    <div className="relative flex gap-3 mb-10">
      <div className="absolute w-px sm:-bottom-8 sm:top-10 -bottom-8 top-8 sm:left-4 left-3 bg-neutral-600"></div>
      {children}
    </div>
  )
}

type EventNodeProps = {
  gradient: string
  children: React.ReactNode
}

Event.Node = ({ gradient, children }: EventNodeProps) => {
  return (
    <div
      className={`${gradient} flex items-center justify-center flex-none w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-gradient-to-br [&>*]:w-3 [&>*]:h-3 [&>*]:sm:w-4 [&>*]:sm:h-4`}
    >
      {children}
    </div>
  )
}

type EventBodyProps = {
  children: React.ReactNode
}

Event.Body = ({ children }: EventBodyProps) => {
  return <div className="flex flex-col w-full gap-1">{children}</div>
}

type EventHeaderProps = {
  children: React.ReactNode
  startTime: string
}

Event.Header = ({ children, startTime }: EventHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-1">
      <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-neutral-200">
        {children}
      </div>
      <span className="text-xs sm:text-sm text-neutral-400">
        {formatDistance(new Date(startTime), new Date())} ago
      </span>
    </div>
  )
}

export default Event

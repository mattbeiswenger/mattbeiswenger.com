import { formatDistance } from 'date-fns'

function Event({ children, title, startTime, node }) {
  return (
    <div className="flex gap-3">
      {node()}
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center justify-between gap-2">
          {title('text-sm text-neutral-200 flex items-center gap-1')}
          <span className="text-sm text-neutral-500">
            {formatDistance(new Date(startTime), new Date())} ago
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Event

import { formatDistance } from 'date-fns'

function Event({ children, title, startTime, node }) {
  return (
    <div className="flex gap-3">
      {node()}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {title(' text-sm text-neutral-200')}
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

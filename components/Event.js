import { formatDistance } from 'date-fns'

function Event({ children, title, startTime, node }) {
  return (
    <div className="relative flex gap-3 mb-10">
      <div className="relative">
        <div className="absolute w-px sm:-bottom-8 sm:top-10 -bottom-8 top-8 sm:left-4 left-3 bg-neutral-600"></div>
        {node(
          'flex items-center justify-center flex-none w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-gradient-to-br'
        )}
      </div>

      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-wrap items-center justify-between gap-1">
          {title('text-xs sm:text-sm text-neutral-200 flex items-center gap-1')}
          <span className="text-xs sm:text-sm text-neutral-400">
            {formatDistance(new Date(startTime), new Date())} ago
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Event

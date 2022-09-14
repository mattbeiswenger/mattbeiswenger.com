import { BoltIcon } from '@heroicons/react/24/outline'
import Event from './Event'

export default function StravaEvent({ event }) {
  return (
    <>
      <Event
        title={(className) => (
          <span className={className}>Ran {event.data.distance} miles</span>
        )}
        node={(className) => (
          <div className={`${className} from-amber-600 to-pink-600`}>
            <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        )}
        startTime={event.startTime}
      >
        <div className="flex items-center gap-8 px-4 py-3 bg-white border border-neutral-700 dark:bg-neutral-800 rounded-xl">
          <div className="flex flex-col">
            <span className="text-xs">Distance</span>
            <span>{event.data.distance} mi</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Time</span>
            <span>{event.data.elapsed_time}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Pace</span>
            <span>{event.data.pace}</span>
          </div>
        </div>
      </Event>
    </>
  )
}

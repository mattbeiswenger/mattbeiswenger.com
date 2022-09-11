import { BoltIcon } from '@heroicons/react/24/outline'
import Event from './Event'

export default function StravaEvent({ event }) {
  return (
    <>
      <Event
        title={(className) => (
          <span className={className}>Ran {event.data.distance} miles</span>
        )}
        node={() => (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-pink-400">
            <BoltIcon className="w-4 h-4" />
          </div>
        )}
        startTime={event.startTime}
      >
        <div className="flex items-center gap-8 px-4 py-3 bg-white border dark:border-none dark:bg-neutral-800 rounded-xl">
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

import { getCommits } from '../lib/github'
import { getStravaActivities } from '../lib/strava'
import Event from '../components/Event'
import { BoltIcon, SparklesIcon } from '@heroicons/react/24/outline'

function getBlock(event) {
  if (event.kind === 1) {
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
  } else if (event.kind === 0) {
    return (
      <Event
        startTime={event.startTime}
        title={(className) => (
          <span className={className}>
            Pushed {event.data.numberOfCommits}{' '}
            {event.data.numberOfCommits === 1 ? 'commit' : 'commits'} to{' '}
            <a
              className="underline text-amber-500 underline-offset-2"
              href={`https://github.com/${event.data.repo.name}`}
              target="blank"
              rel="noreferrer"
            >
              {event.data.repo.name}
            </a>
          </span>
        )}
        node={() => (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-600 to-rose-600">
            <SparklesIcon className="w-4 h-4" />
          </div>
        )}
      />
    )
  }
}

export default function Timeline({ events }) {
  return (
    <div className="flex flex-col max-w-3xl gap-10 p-4 mx-auto">
      {events.map((event) => {
        return <div key={event.id}>{getBlock(event)}</div>
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const events = await Promise.all([getStravaActivities(), getCommits()])
  const mergedEvents = events.flat()
  mergedEvents.sort((a, b) => {
    return new Date(b.startTime) - new Date(a.startTime)
  })

  return {
    props: {
      events: mergedEvents,
    },
  }
}

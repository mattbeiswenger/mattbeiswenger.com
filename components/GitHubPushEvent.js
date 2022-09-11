import { SparklesIcon } from '@heroicons/react/24/outline'
import Event from './Event'
import GitHubIcon from './GitHubIcon'

export default function GitHubPushEvent({ event }) {
  return (
    <Event
      startTime={event.startTime}
      title={(className) => (
        <span className={className}>
          Pushed {event.data.numberOfCommits}{' '}
          {event.data.numberOfCommits === 1 ? 'commit' : 'commits'} to{' '}
          <a
            className="flex items-center gap-2 px-2 py-1 mx-1 border rounded-md border-neutral-700 bg-neutral-800"
            href={`https://github.com/${event.data.repo.name}`}
            target="blank"
            rel="noreferrer"
          >
            <GitHubIcon className="w-4 h-4 fill-white" />
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

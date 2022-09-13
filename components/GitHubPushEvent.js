import { SparklesIcon } from '@heroicons/react/24/outline'
import Event from './Event'
import GitHubIcon from './GitHubIcon'

export default function GitHubPushEvent({ event }) {
  const [repoAccount, repoName] = event.data.repo.name.split('/')

  return (
    <Event
      startTime={event.startTime}
      title={(className) => (
        <span className={`${className} sm:text-sm text-xs flex flex-wrap`}>
          Pushed {event.data.numberOfCommits}{' '}
          {event.data.numberOfCommits === 1 ? 'commit' : 'commits'} to{' '}
          <a
            className="flex items-center gap-2 px-2 py-1 mx-1 border rounded-md border-neutral-700 bg-neutral-800"
            href={`https://github.com/${event.data.repo.name}`}
            target="blank"
            rel="noreferrer"
          >
            <GitHubIcon className="w-2 h-2 sm:w-3 sm:h-3 fill-white" />
            <span>
              <span className="hidden sm:visible">{repoAccount}/</span>
              <span>{repoName}</span>
            </span>
          </a>
        </span>
      )}
      node={() => (
        <div className="flex items-center justify-center w-5 h-5 rounded-full sm:w-8 sm:h-8 bg-gradient-to-br from-sky-600 to-rose-600">
          <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      )}
    />
  )
}

import { SparklesIcon } from '@heroicons/react/24/outline'
import Event from './Event'
import GitHubIcon from './GitHubIcon'

export default function GitHubPushEvent({ event }) {
  const [repoAccount, repoName] = event.data.repo.name.split('/')

  return (
    <Event>
      <Event.Node gradient="from-sky-600 to-rose-600">
        <SparklesIcon />
      </Event.Node>
      <Event.Header startTime={event.startTime}>
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
      </Event.Header>
    </Event>
  )
}

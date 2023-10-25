import { Event, EventType } from '../types'
import { GitHubEvent, PushEvent } from '../types/github'

export async function getCommits(): Promise<Event[]> {
  const response = await fetch(
    'https://api.github.com/users/mattbeiswenger/events/public',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Bearer: `Authorization: Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )

  const events: GitHubEvent[] = await response.json()

  console.log(events)

  return events
    .filter((event): event is PushEvent => event.type === 'PushEvent')
    .map((event) => {
      return {
        id: event.id,
        kind: EventType.GIT_COMMIT,
        startTime: event.created_at,
        data: {
          numberOfCommits: event.payload.commits.length,
          repo: event.repo,
        },
      }
    })
}

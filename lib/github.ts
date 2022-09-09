import { Octokit } from 'octokit'
import { Event, EventType } from '../types'

export async function getCommits(): Promise<Event[]> {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN })
  const { data: events } = await octokit.request(
    'GET /users/{username}/events/public',
    {
      username: 'mattbeiswenger',
    }
  )
  return events
    .filter((event) => event.type === 'PushEvent' && event.created_at)
    .map((event) => {
      console.log(event)
      if (event.created_at) {
        return {
          id: event.id,
          kind: EventType.GIT_COMMIT,
          startTime: event.created_at,
          data: {
            numberOfCommits: event.payload.commits.length,
            repo: event.repo,
          },
        }
      }
      throw new Error('Push event missing created_at value')
    })
}

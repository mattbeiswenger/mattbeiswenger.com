/**
 * GitHub doesn't seem to have good TypeScript types for their events API so these are created from their docs
 * https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#event-object-common-properties
 */

type EventType = 'PushEvent'

export type GitHubEvent = {
  id: string
  type: EventType
  actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: string
    url: string
    avatar_url: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  public: boolean
  created_at: string
  org: {
    id: number
    login: string
    gravatar_id: string
    url: string
    avatar_url: string
  }
}

export type Commit = {
  sha: string
  message: string
  author: {
    name: string
    email: string
  }
  url: string
  distinct: boolean
}

export interface PushEvent extends GitHubEvent {
  payload: {
    push_id: number
    size: number
    distinct_size: number
    ref: string
    head: string
    before: string
    commits: Commit[]
  }
}

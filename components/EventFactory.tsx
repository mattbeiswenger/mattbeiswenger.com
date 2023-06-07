import GitHubPushEvent from './events/GitHubPushEvent'
import { Event, EventType } from '../types'
import ArticleEvent from './events/ArticleEvent'

type EventFactoryProps = {
  event: Event
}

export default function EventFactory({ event }: EventFactoryProps) {
  switch (event.kind) {
    case EventType.GIT_COMMIT:
      return <GitHubPushEvent event={event} />
    case EventType.PUBLISHED_ARTICLE:
      return <ArticleEvent event={event} />
  }
  throw new Error(`Unrecognized event type: ${event.kind}`)
}

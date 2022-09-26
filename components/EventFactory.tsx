import GitHubPushEvent from './GitHubPushEvent'
import StravaEvent from './StravaEvent'
import { Event, EventType } from '../types'
import ArticleEvent from './ArticleEvent'

type EventFactoryProps = {
  event: Event
}

export default function EventFactory({ event }: EventFactoryProps) {
  switch (event.kind) {
    case EventType.STRAVA_WORKOUT:
      return <StravaEvent event={event} />
    case EventType.GIT_COMMIT:
      return <GitHubPushEvent event={event} />
    case EventType.PUBLISHED_ARTICLE:
      return <ArticleEvent event={event} />
  }
  throw new Error(`Unrecognized event type: ${event.kind}`)
}

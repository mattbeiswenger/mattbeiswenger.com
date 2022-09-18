import GitHubPushEvent from './GitHubPushEvent'
import StravaEvent from './StravaEvent'
import { Event, EventType } from '../types'

type EventFactoryProps = {
  event: Event
}

export default function EventFactory({ event }: EventFactoryProps) {
  if (event.kind === EventType.STRAVA_WORKOUT) {
    return <StravaEvent event={event} />
  } else if (event.kind === EventType.GIT_COMMIT) {
    return <GitHubPushEvent event={event} />
  }
  throw new Error(`Unrecognized event type: ${event.kind}`)
}

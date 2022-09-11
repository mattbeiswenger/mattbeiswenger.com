import GitHubPushEvent from './GitHubPushEvent'
import StravaEvent from './StravaEvent'

export default function EventFactory({ event }) {
  if (event.kind === 1) {
    return <StravaEvent event={event} />
  } else if (event.kind === 0) {
    return <GitHubPushEvent event={event} />
  }
}

import { getCommits } from '../lib/github'
import { getStravaActivities } from '../lib/strava'
import { getArticleEvents } from '../lib/mdx'
import Container from '../components/Container'
import EventStream from '../components/EventStream'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { Event } from '../types'
import { useCommandPaletteContext } from '../contexts/command-palette'

type ActivitiesProps = {
  events: Event[]
}

export default function Activities({ events }: ActivitiesProps) {
  const [open, setOpen] = useCommandPaletteContext()

  return (
    <Container title="Activity — Matt Beiswenger">
      <div className="flex items-center justify-between">
        <div>
          <BackButton href="/">Home</BackButton>
          <Header>Activities</Header>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex-none px-3 py-1.5 text-sm border rounded-md ring-0 bg-neutral-800 border-neutral-700"
        >
          ⌘K
        </button>
      </div>
      <EventStream events={events} />
    </Container>
  )
}

export async function getServerSideProps() {
  const events = await Promise.all([
    getStravaActivities(),
    getCommits(),
    getArticleEvents(),
  ])
  const mergedEvents = events.flat()
  mergedEvents.sort((a, b) => {
    return new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  })

  return {
    props: {
      events: mergedEvents,
    },
  }
}

import { getCommits } from '../lib/github'
import { getStravaActivities } from '../lib/strava'
import Container from '../components/Container'
import EventStream from '../components/EventStream'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { Event } from '../types'

type ActivitiesProps = {
  events: Event[]
}

export default function Activities({ events }: ActivitiesProps) {
  return (
    <Container title="Activity — Matt Beiswenger">
      <BackButton href="/">Home</BackButton>
      <Header>Activities</Header>
      <EventStream events={events} />
    </Container>
  )
}

export async function getServerSideProps() {
  const events = await Promise.all([getStravaActivities(), getCommits()])
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

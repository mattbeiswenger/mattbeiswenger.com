import { getCommits } from '../lib/github'
import { getStravaActivities } from '../lib/strava'
import Container from '../components/Container'
import EventStream from '../components/EventStream'
import Header from '../components/Header'
import BackButton from '../components/BackButton'

export default function Activities({ events }) {
  return (
    <Container title="Activity — Matt Beiswenger">
      <BackButton href="/">Home</BackButton>
      <Header>Activities</Header>
      <EventStream events={events} className="" />
    </Container>
  )
}

export async function getServerSideProps() {
  const events = await Promise.all([getStravaActivities(), getCommits()])
  const mergedEvents = events.flat()
  mergedEvents.sort((a, b) => {
    return new Date(b.startTime) - new Date(a.startTime)
  })

  return {
    props: {
      events: mergedEvents,
    },
  }
}

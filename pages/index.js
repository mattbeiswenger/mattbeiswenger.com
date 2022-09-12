import Container from '../components/Container'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { getStravaActivities } from '../lib/strava'
import { getCommits } from '../lib/github'
import { isAfter, startOfToday, sub } from 'date-fns'
import EventFactory from '../components/EventFactory'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home({ events }) {
  return (
    <>
      <Container title="Matt Beiswenger">
        <Header>Matt Beiswenger</Header>
        <div className="text-sm font-medium text-neutral-400">
          Software Developer
        </div>
        <div className="leading-7 mt-7 text-neutral-300">
          I&apos;m a design-focused software developer currently building
          products at{' '}
          <a
            className="flex items-center gap-1 text-neutral-200"
            href="https://topbloc.com"
            rel="noreferrer"
            target="_blank"
          >
            TopBloc
            <ArrowUpRightIcon className="w-3 h-3 stroke-neutral-300" />
          </a>
          <div className="mt-5">
            Type{' '}
            <span className="px-1 py-0.5 text-sm rounded-md bg-neutral-800 border border-neutral-700">
              ⌘K
            </span>{' '}
            to explore this site
          </div>
        </div>
        <section>
          <div className="mt-8 mb-5 text-neutral-800 dark:text-neutral-300">
            Here's what I've been up to recently
          </div>
          <div className="flex flex-col justify-center gap-10 mx-auto mt-10 align-middle fade-bottom justify-items-center">
            {events.map((event) => {
              return <EventFactory key={event.id} event={event} />
            })}
          </div>
          <div className="relative flex justify-center -mt-24">
            <Link href="/activities">
              <a className="px-4 py-2 border rounded-md bg-neutral-800 border-neutral-700 text-neutral-200">
                View all activities
              </a>
            </Link>
          </div>
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const today = startOfToday()
  const oneWeekAgo = sub(today, { days: 5 })

  const events = await Promise.all([getStravaActivities(), getCommits()])
  const mergedEvents = events.flat()
  const eventsFromPastWeek = mergedEvents.filter((event) =>
    isAfter(new Date(event.startTime), oneWeekAgo)
  )

  eventsFromPastWeek.sort((a, b) => {
    return new Date(b.startTime) - new Date(a.startTime)
  })

  console.log(eventsFromPastWeek)

  return {
    props: {
      events: eventsFromPastWeek,
    },
  }
}

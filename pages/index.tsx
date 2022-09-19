import Container from '../components/Container'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { getStravaActivities } from '../lib/strava'
import { getCommits } from '../lib/github'
import Link from 'next/link'
import Header from '../components/Header'
import EventStream from '../components/EventStream'
import { Event } from '../types'
import { useCommandPaletteContext } from '../contexts/command-palette'

type HomeProps = {
  events: Event[]
}

export default function Home({ events }: HomeProps) {
  const [open, setOpen] = useCommandPaletteContext()

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
            className="inline-flex items-center gap-1 text-neutral-400"
            href="https://topbloc.com"
            rel="noreferrer"
            target="_blank"
          >
            TopBloc
            <ArrowUpRightIcon className="w-3 h-3 stroke-neutral-300" />
          </a>
          <div className="mt-5">
            Type or press{' '}
            <button
              onClick={() => setOpen(true)}
              className="ring-0 px-1 py-0.5 text-sm rounded-md bg-neutral-800 border border-neutral-700"
            >
              ⌘K
            </button>{' '}
            to explore this site
          </div>
        </div>
        <section>
          <div className="mt-8 mb-5 text-neutral-800 dark:text-neutral-300">
            Here&apos;s what I&apos;ve been up to recently
          </div>
          <div className="fade-bottom">
            <EventStream events={events} />
          </div>
          <div className="relative flex justify-center">
            <Link href="/activities">
              <a className="px-4 py-2 text-sm border rounded-md bg-neutral-800 border-neutral-700 text-neutral-200 sm:text-base">
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
  const events = await Promise.all([getStravaActivities(), getCommits()])
  const mergedEvents = events.flat()
  mergedEvents.sort((a, b) => {
    return new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  })
  const firstTenEvents = mergedEvents.slice(0, 10)

  return {
    props: {
      events: firstTenEvents,
    },
  }
}

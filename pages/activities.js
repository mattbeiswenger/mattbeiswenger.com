import { getCommits } from '../lib/github'
import { getStravaActivities } from '../lib/strava'
import Calendar from '../components/Calendar'
import { startOfToday, format, startOfDay, parseISO } from 'date-fns'
import { useState } from 'react'
import Container from '../components/Container'
import EventStream from '../components/EventStream'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Header from '../components/Header'

export default function Activities({ events }) {
  const today = startOfToday()

  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))

  return (
    <Container title="Activity — Matt Beiswenger">
      <Link href="/">
        <a className="inline-flex items-center gap-1 text-sm text-neutral-400">
          <ArrowLongLeftIcon className="w-4 h-4 text-sm" />
          Home
        </a>
      </Link>
      <Header>Activities</Header>
      {/* <div className="grid items-center w-full h-screen grid-cols-2"> */}
      {/* <Calendar
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        /> */}
      <EventStream events={events} className="" />
      {/* </div> */}
    </Container>
  )
}

export async function getServerSideProps() {
  const events = await Promise.all([getStravaActivities(), getCommits()])
  const mergedEvents = events.flat()
  mergedEvents.sort((a, b) => {
    return new Date(b.startTime) - new Date(a.startTime)
  })

  // const groupedEvents = mergedEvents.reduce((acc, event) => {
  //   const key = startOfDay(parseISO(event.startTime)).toDateString()
  //   acc[key] = acc[key] ? [...acc[key], event] : [event]
  //   return acc
  // }, {})

  return {
    props: {
      events: mergedEvents,
    },
  }
}

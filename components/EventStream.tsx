import EventFactory from './EventFactory'
import { Event } from '../types'

type EventStreamProps = {
  events: Event[],
}

export default function EventStream({ events }: EventStreamProps) {
  return (
    <div className="flex flex-col mt-10">
      {events.map((event) => {
        return <EventFactory key={event.id} event={event} />
      })}
    </div>
  )
}

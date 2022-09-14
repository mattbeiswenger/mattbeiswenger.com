import EventFactory from './EventFactory'

export default function EventStream({ events }) {
  return (
    <div className="relative flex flex-col mt-10">
      {events.map((event) => {
        return <EventFactory key={event.id} event={event} />
      })}
    </div>
  )
}

import { format } from 'date-fns'
import EventFactory from './EventFactory'

export default function EventStream({ events, className }) {
  return (
    <div className={`${className} flex flex-col gap-10 mt-10`}>
      {events.map((event) => {
        return <EventFactory key={event.id} event={event} />
      })}

      {/* {Object.entries(events).map(([key, value]) => {
        return (
          <>
            <div className="text-sm text-gray-400">
              {format(new Date(key), 'MMM do')}
            </div>
            {value.map((event) => {
              return <EventFactory key={event.id} event={event} />
            })}
          </>
        )
      })} */}
    </div>
  )
}

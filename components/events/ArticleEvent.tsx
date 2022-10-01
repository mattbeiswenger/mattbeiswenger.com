import { PencilIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Event as EventType } from '../../types'
import Event from '../Event'

type ArticleEventProps = {
  event: EventType
}

export default function ArticleEvent({ event }: ArticleEventProps) {
  return (
    <Event>
      <Event.Node gradient="from-teal-500 to-sky-600">
        <PencilIcon />
      </Event.Node>
      <Event.Body>
        <Event.Header startTime={event.startTime}>
          Published article{' '}
          <Link href={`articles/${event.data.slug}`}>
            <a className="text-neutral-400">{event.data.title}</a>
          </Link>
        </Event.Header>
      </Event.Body>
    </Event>
  )
}

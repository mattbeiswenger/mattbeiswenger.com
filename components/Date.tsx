import { parseISO, format } from 'date-fns'

type DateProps = {
  dateString: string
  className?: string
}

export default function Date({ dateString, className }: DateProps) {
  const date = parseISO(dateString)
  return (
    <time className={className} dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

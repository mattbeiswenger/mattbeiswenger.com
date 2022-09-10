import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import {
  startOfToday,
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isToday,
  isEqual,
  parse,
  add,
  startOfWeek,
  sub,
  isSameMonth,
  getDay,
} from 'date-fns'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const COL_START_CLASSES = [
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export default function Calendar() {
  const today = startOfToday()

  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayOfCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const newDays = eachDayOfInterval({
    start: startOfWeek(firstDayOfCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  })

  function nextMonth() {
    const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'))
  }

  function lastMonth() {
    const firstDayOfLastMonth = sub(firstDayOfCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayOfLastMonth, 'MMM-yyyy'))
  }

  function selectDay(day) {
    setSelectedDay(day)
    setCurrentMonth(format(day, 'MMM-yyyy'))
  }

  return (
    <div className="px-10 pb-10 border shadow-sm border-neutral-700 place-self-center rounded-xl bg-neutral-800">
      <div className="flex items-center justify-between py-8">
        <button
          className="flex items-center w-10 h-10 transition-colors rounded-full group hover:bg-neutral-700"
          onClick={() => lastMonth()}
        >
          <ChevronLeftIcon className="w-full h-4 transition-colors group-hover:text-neutral-400 text-neutral-500" />
        </button>
        <span className="font-medium text-gray-200">
          {format(firstDayOfCurrentMonth, 'MMMM yyyy')}
        </span>
        <button
          className="flex items-center w-10 h-10 transition-colors rounded-full group hover:bg-neutral-700"
          onClick={() => nextMonth()}
        >
          <ChevronRightIcon className="w-full h-4 transition-colors text-neutral-500 group-hover:text-neutral-400" />
        </button>
      </div>
      <div className="grid items-start grid-cols-7 gap-2">
        <div className="text">Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        {newDays.map((day, dayIndex) => {
          return (
            <button
              onClick={() => selectDay(day)}
              key={day.toString()}
              className={`w-10 h-10 rounded-full transition-colors ${
                dayIndex === 0 && COL_START_CLASSES[getDay(day)]
              } ${classNames(
                isEqual(day, selectedDay) &&
                  'text-white, bg-gradient-to-br from-amber-500 to-red-400',
                !isEqual(day, selectedDay) && 'hover:bg-neutral-700',
                !isEqual(day, selectedDay) && isToday(day) && 'text-amber-400',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayOfCurrentMonth) &&
                  'text-gray-500'
              )}`}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'd')}
              </time>
            </button>
          )
        })}
      </div>
    </div>
  )
}

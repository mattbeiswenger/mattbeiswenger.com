/**
 * Resources:
 * https://developers.strava.com/docs/reference/
 */

import { Schema14 as SummaryActivity } from '../types/strava'
import { Event, EventType } from '../types'

/**
 *
 * @param meters
 * @returns Miles rounded to nearest hundredth
 */
function convertMetersToMiles(meters: number) {
  const miles = meters * 0.000621371
  return Math.round(miles * 100) / 100
}

function pad(d) {
  return d < 10 ? '0' + d.toString() : d.toString()
}

function getMinutesAndSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds - minutes * 60)
  return [minutes, remainingSeconds]
}

/**
 *
 * @param seconds
 * @returns String formatted as <minutes>m <seconds>s
 */
function formatSecondsToMinutes(seconds: number) {
  const [minutes, remainingSeconds] = getMinutesAndSeconds(seconds)
  return `${minutes}m ${pad(remainingSeconds)}s`
}

function formatPace(seconds: number) {
  const [minutes, remainingSeconds] = getMinutesAndSeconds(seconds)
  return `${minutes}:${pad(remainingSeconds)} / mi`
}

export async function getStravaActivities(): Promise<Event[]> {
  const response = await fetch(
    'https://www.strava.com/api/v3/athlete/activities',
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
      },
    }
  )

  let activities: SummaryActivity[] = await response.json()

  return activities.map((activity) => {
    if (
      activity.id &&
      activity.start_date &&
      activity.distance &&
      activity.moving_time &&
      activity.average_speed
    ) {
      const miles = convertMetersToMiles(activity.distance)
      return {
        id: activity.id.toString(),
        kind: EventType.STRAVA_WORKOUT,
        startTime: activity.start_date,
        data: {
          distance: miles,
          elapsed_time: formatSecondsToMinutes(activity.moving_time),
          pace: formatPace(activity.moving_time / miles),
        },
      }
    }
    console.log(activity)
    throw new Error('Activity is missing a required parameter')
  })
}

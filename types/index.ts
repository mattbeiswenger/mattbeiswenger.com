export enum EventType {
  GIT_COMMIT,
  STRAVA_WORKOUT,
}

export interface Event {
  id: string
  kind: EventType
  startTime: string | null
  endTime?: string
  data: any
}

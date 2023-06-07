export enum EventType {
  GIT_COMMIT,
  PUBLISHED_ARTICLE,
}

export interface Event {
  id: string
  kind: EventType
  startTime: string
  endTime?: string
  data: any
}

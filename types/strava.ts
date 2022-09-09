/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * A roll-up of metrics pertaining to a set of activities. Values are in seconds and meters.
 */
export interface Schema1 {
  /** The number of activities considered in this total. */
  count?: number

  /**
   * The total distance covered by the considered activities.
   * @format float
   */
  distance?: number

  /** The total moving time of the considered activities. */
  moving_time?: number

  /** The total elapsed time of the considered activities. */
  elapsed_time?: number

  /**
   * The total elevation gain of the considered activities.
   * @format float
   */
  elevation_gain?: number

  /** The total number of achievements of the considered activities. */
  achievement_count?: number
}

export type Schema2 = Schema19 & {
  resource_state?: number
  firstname?: string
  lastname?: string
  profile_medium?: string
  profile?: string
  city?: string
  state?: string
  country?: string
  sex?: 'M' | 'F'
  premium?: boolean
  summit?: boolean
  created_at?: string
  updated_at?: string
}

export type Schema3 = {
  id?: number
  resource_state?: number
  name?: string
} & {
  profile_medium?: string
  cover_photo?: string
  cover_photo_small?: string
  sport_type?: 'cycling' | 'running' | 'triathlon' | 'other'
  activity_types?: Schema20[]
  city?: string
  state?: string
  country?: string
  private?: boolean
  member_count?: number
  featured?: boolean
  verified?: boolean
  url?: string
}

export interface Schema4 {
  /** The gear's unique identifier. */
  id?: string

  /** Resource state, indicates level of detail. Possible values: 2 -> "summary", 3 -> "detail" */
  resource_state?: number

  /** Whether this gear's is the owner's default one. */
  primary?: boolean

  /** The gear's name. */
  name?: string

  /**
   * The distance logged with this gear.
   * @format float
   */
  distance?: number
}

/**
 * Encapsulates the errors that may be returned from the API.
 */
export interface Schema5 {
  /** The set of specific errors associated with this fault, if any. */
  errors?: { code?: string; field?: string; resource?: string }[]

  /** The message of the fault. */
  message?: string
}

export type Schema6 = Schema2 & {
  follower_count?: number
  friend_count?: number
  measurement_preference?: 'feet' | 'meters'
  ftp?: number
  weight?: number
  clubs?: Schema3[]
  bikes?: {
    id?: string
    resource_state?: number
    primary?: boolean
    name?: string
    distance?: number
  }[]
  shoes?: Schema4[]
}

export interface Schema7 {
  /** The minimum value in the range. */
  min?: number

  /** The maximum value in the range. */
  max?: number
}

export type Schema8 = Schema7[]

export interface Schema9 {
  /**
   * The unique identifier of this segment
   * @format int64
   */
  id?: number

  /** The name of this segment */
  name?: string
  activity_type?: 'Ride' | 'Run'

  /**
   * The segment's distance, in meters
   * @format float
   */
  distance?: number

  /**
   * The segment's average grade, in percents
   * @format float
   */
  average_grade?: number

  /**
   * The segments's maximum grade, in percents
   * @format float
   */
  maximum_grade?: number

  /**
   * The segments's highest elevation, in meters
   * @format float
   */
  elevation_high?: number

  /**
   * The segments's lowest elevation, in meters
   * @format float
   */
  elevation_low?: number

  /** A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers. */
  start_latlng?: number[]

  /** A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers. */
  end_latlng?: Schema10

  /** The category of the climb [0, 5]. Higher is harder ie. 5 is Hors catégorie, 0 is uncategorized in climb_category. */
  climb_category?: number

  /** The segments's city. */
  city?: string

  /** The segments's state or geographical region. */
  state?: string

  /** The segment's country. */
  country?: string

  /** Whether this segment is private. */
  private?: boolean
  athlete_pr_effort?: {
    id?: number
    activity_id?: number
    elapsed_time?: number
    start_date?: string
    start_date_local?: string
    distance?: number
    is_kom?: boolean
  }
  athlete_segment_stats?: {
    pr_activity_id?: number
    pr_elapsed_time?: number
    pr_date?: string
    effort_count?: number
  }
}

/**
 * A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers.
 */
export type Schema10 = number[]

export type Schema11 = Schema9 & {
  created_at?: string
  updated_at?: string
  total_elevation_gain?: number
  map?: { id?: string; polyline?: string; summary_polyline?: string }
  effort_count?: number
  athlete_count?: number
  hazardous?: boolean
  star_count?: number
}

export interface Schema12 {
  /**
   * The unique identifier of this effort
   * @format int64
   */
  id?: number

  /**
   * The unique identifier of the activity related to this effort
   * @format int64
   */
  activity_id?: number

  /** The effort's elapsed time */
  elapsed_time?: number

  /**
   * The time at which the effort was started.
   * @format date-time
   */
  start_date?: string

  /**
   * The time at which the effort was started in the local timezone.
   * @format date-time
   */
  start_date_local?: string

  /**
   * The effort's distance in meters
   * @format float
   */
  distance?: number

  /** Whether this effort is the current best on the leaderboard */
  is_kom?: boolean
}

export type Schema13 = Schema12 & {
  name?: string
  activity?: { id?: number }
  athlete?: { id?: number }
  moving_time?: number
  start_index?: number
  end_index?: number
  average_cadence?: number
  average_watts?: number
  device_watts?: boolean
  average_heartrate?: number
  max_heartrate?: number
  segment?: Schema9
  kom_rank?: number
  pr_rank?: number
  hidden?: boolean
}

export type Schema14 = Schema18 & {
  external_id?: string
  upload_id?: number
  athlete?: Schema19
  name?: string
  distance?: number
  moving_time?: number
  elapsed_time?: number
  total_elevation_gain?: number
  elev_high?: number
  elev_low?: number
  type?: Schema20
  sport_type?: Schema21
  start_date?: string
  start_date_local?: string
  timezone?: string
  start_latlng?: Schema10
  end_latlng?: Schema10
  achievement_count?: number
  kudos_count?: number
  comment_count?: number
  athlete_count?: number
  photo_count?: number
  total_photo_count?: number
  map?: Schema22
  trainer?: boolean
  commute?: boolean
  manual?: boolean
  private?: boolean
  flagged?: boolean
  workout_type?: number
  upload_id_str?: string
  average_speed?: number
  max_speed?: number
  has_kudoed?: boolean
  hide_from_home?: boolean
  gear_id?: string
  kilojoules?: number
  average_watts?: number
  device_watts?: boolean
  max_watts?: number
  weighted_average_watts?: number
}

export interface Schema15 {
  /**
   * The average speed of this split, in meters per second
   * @format float
   */
  average_speed?: number

  /**
   * The distance of this split, in meters
   * @format float
   */
  distance?: number

  /** The elapsed time of this split, in seconds */
  elapsed_time?: number

  /**
   * The elevation difference of this split, in meters
   * @format float
   */
  elevation_difference?: number

  /** The pacing zone of this split */
  pace_zone?: number

  /** The moving time of this split, in seconds */
  moving_time?: number

  /** N/A */
  split?: number
}

export interface Schema16 {
  /**
   * The unique identifier of this lap
   * @format int64
   */
  id?: number
  activity?: Schema18
  athlete?: Schema19

  /**
   * The lap's average cadence
   * @format float
   */
  average_cadence?: number

  /**
   * The lap's average speed
   * @format float
   */
  average_speed?: number

  /**
   * The lap's distance, in meters
   * @format float
   */
  distance?: number

  /** The lap's elapsed time, in seconds */
  elapsed_time?: number

  /** The start index of this effort in its activity's stream */
  start_index?: number

  /** The end index of this effort in its activity's stream */
  end_index?: number

  /** The index of this lap in the activity it belongs to */
  lap_index?: number

  /**
   * The maximum speed of this lat, in meters per second
   * @format float
   */
  max_speed?: number

  /** The lap's moving time, in seconds */
  moving_time?: number

  /** The name of the lap */
  name?: string

  /** The athlete's pace zone during this lap */
  pace_zone?: number
  split?: number

  /**
   * The time at which the lap was started.
   * @format date-time
   */
  start_date?: string

  /**
   * The time at which the lap was started in the local timezone.
   * @format date-time
   */
  start_date_local?: string

  /**
   * The elevation gain of this lap, in meters
   * @format float
   */
  total_elevation_gain?: number
}

export type Schema17 = Schema14 & {
  description?: string
  photos?: {
    count?: number
    primary?: {
      id?: number
      source?: number
      unique_id?: string
      urls?: Record<string, string>
    }
  }
  gear?: Schema4
  calories?: number
  segment_efforts?: Schema13[]
  device_name?: string
  embed_token?: string
  splits_metric?: {
    average_speed?: number
    distance?: number
    elapsed_time?: number
    elevation_difference?: number
    pace_zone?: number
    moving_time?: number
    split?: number
  }[]
  splits_standard?: Schema15[]
  laps?: Schema16[]
  best_efforts?: Schema13[]
}

export interface Schema18 {
  /**
   * The unique identifier of the activity
   * @format int64
   */
  id?: number
}

export interface Schema19 {
  /**
   * The unique identifier of the athlete
   * @format int64
   */
  id?: number
}

/**
 * An enumeration of the types an activity may have. Note that this enumeration does not include new sport types (e.g. MountainBikeRide, EMountainBikeRide), activities with these sport types will have the corresponding activity type (e.g. Ride for MountainBikeRide, EBikeRide for EMountainBikeRide)
 */
export enum Schema20 {
  AlpineSki = 'AlpineSki',
  BackcountrySki = 'BackcountrySki',
  Canoeing = 'Canoeing',
  Crossfit = 'Crossfit',
  EBikeRide = 'EBikeRide',
  Elliptical = 'Elliptical',
  Golf = 'Golf',
  Handcycle = 'Handcycle',
  Hike = 'Hike',
  IceSkate = 'IceSkate',
  InlineSkate = 'InlineSkate',
  Kayaking = 'Kayaking',
  Kitesurf = 'Kitesurf',
  NordicSki = 'NordicSki',
  Ride = 'Ride',
  RockClimbing = 'RockClimbing',
  RollerSki = 'RollerSki',
  Rowing = 'Rowing',
  Run = 'Run',
  Sail = 'Sail',
  Skateboard = 'Skateboard',
  Snowboard = 'Snowboard',
  Snowshoe = 'Snowshoe',
  Soccer = 'Soccer',
  StairStepper = 'StairStepper',
  StandUpPaddling = 'StandUpPaddling',
  Surfing = 'Surfing',
  Swim = 'Swim',
  Velomobile = 'Velomobile',
  VirtualRide = 'VirtualRide',
  VirtualRun = 'VirtualRun',
  Walk = 'Walk',
  WeightTraining = 'WeightTraining',
  Wheelchair = 'Wheelchair',
  Windsurf = 'Windsurf',
  Workout = 'Workout',
  Yoga = 'Yoga',
}

/**
 * An enumeration of the sport types an activity may have. Distinct from ActivityType in that it has new types (e.g. MountainBikeRide)
 */
export enum Schema21 {
  AlpineSki = 'AlpineSki',
  BackcountrySki = 'BackcountrySki',
  Canoeing = 'Canoeing',
  Crossfit = 'Crossfit',
  EBikeRide = 'EBikeRide',
  Elliptical = 'Elliptical',
  EMountainBikeRide = 'EMountainBikeRide',
  Golf = 'Golf',
  GravelRide = 'GravelRide',
  Handcycle = 'Handcycle',
  Hike = 'Hike',
  IceSkate = 'IceSkate',
  InlineSkate = 'InlineSkate',
  Kayaking = 'Kayaking',
  Kitesurf = 'Kitesurf',
  MountainBikeRide = 'MountainBikeRide',
  NordicSki = 'NordicSki',
  Ride = 'Ride',
  RockClimbing = 'RockClimbing',
  RollerSki = 'RollerSki',
  Rowing = 'Rowing',
  Run = 'Run',
  Sail = 'Sail',
  Skateboard = 'Skateboard',
  Snowboard = 'Snowboard',
  Snowshoe = 'Snowshoe',
  Soccer = 'Soccer',
  StairStepper = 'StairStepper',
  StandUpPaddling = 'StandUpPaddling',
  Surfing = 'Surfing',
  Swim = 'Swim',
  TrailRun = 'TrailRun',
  Velomobile = 'Velomobile',
  VirtualRide = 'VirtualRide',
  VirtualRun = 'VirtualRun',
  Walk = 'Walk',
  WeightTraining = 'WeightTraining',
  Wheelchair = 'Wheelchair',
  Windsurf = 'Windsurf',
  Workout = 'Workout',
  Yoga = 'Yoga',
}

export interface Schema22 {
  /** The identifier of the map */
  id?: string

  /** The polyline of the map, only returned on detailed representation of an object */
  polyline?: string

  /** The summary polyline of the map */
  summary_polyline?: string
}

export interface Schema23 {
  athlete?: Schema2

  /** The description of the route */
  description?: string

  /**
   * The route's distance, in meters
   * @format float
   */
  distance?: number

  /**
   * The route's elevation gain.
   * @format float
   */
  elevation_gain?: number

  /**
   * The unique identifier of this route
   * @format int64
   */
  id?: number

  /** The unique identifier of the route in string format */
  id_str?: string
  map?: Schema22

  /** The name of this route */
  name?: string

  /** Whether this route is private */
  private?: boolean

  /** Whether this route is starred by the logged-in athlete */
  starred?: boolean

  /** An epoch timestamp of when the route was created */
  timestamp?: number

  /** This route's type (1 for ride, 2 for runs) */
  type?: number

  /** This route's sub-type (1 for road, 2 for mountain bike, 3 for cross, 4 for trail, 5 for mixed) */
  sub_type?: number

  /**
   * The time at which the route was created
   * @format date-time
   */
  created_at?: string

  /**
   * The time at which the route was last updated
   * @format date-time
   */
  updated_at?: string

  /** Estimated time in seconds for the authenticated athlete to complete route */
  estimated_moving_time?: number

  /** The segments traversed by this route */
  segments?: Schema9[]
}

export interface Schema24 {
  /**
   * The unique identifier of the upload
   * @format int64
   */
  id?: number

  /** The unique identifier of the upload in string format */
  id_str?: string

  /** The external identifier of the upload */
  external_id?: string

  /** The error associated with this upload */
  error?: string

  /** The status of this upload */
  status?: string

  /**
   * The identifier of the activity this upload resulted into
   * @format int64
   */
  activity_id?: number
}

export interface Schema25 {
  /** The number of data points in this stream */
  original_size?: number

  /** The level of detail (sampling) in which this stream was returned */
  resolution?: 'low' | 'medium' | 'high'

  /** The base series used in the case the stream was downsampled */
  series_type?: 'distance' | 'time'
}

export interface Schema26 {
  time?: {
    original_size?: number
    resolution?: 'low' | 'medium' | 'high'
    series_type?: 'distance' | 'time'
  } & { data?: number[] }
  distance?: Schema25 & { data?: number[] }
  latlng?: Schema25 & { data?: Schema10[] }
  altitude?: Schema25 & { data?: number[] }
  velocity_smooth?: Schema25 & { data?: number[] }
  heartrate?: Schema25 & { data?: number[] }
  cadence?: Schema25 & { data?: number[] }
  watts?: Schema25 & { data?: number[] }
  temp?: Schema25 & { data?: number[] }
  moving?: Schema25 & { data?: boolean[] }
  grade_smooth?: Schema25 & { data?: number[] }
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://www.strava.com/api/v3'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    )
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title Strava API v3
 * @version 3.0.0
 * @baseUrl https://www.strava.com/api/v3
 *
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  athletes = {
    /**
     * @description Returns the activity stats of an athlete. Only includes data from activities set to Everyone visibilty.
     *
     * @tags Athletes
     * @name GetStats
     * @summary Get Athlete Stats
     * @request GET:/athletes/{id}/stats
     * @secure
     */
    getStats: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          biggest_ride_distance?: number
          biggest_climb_elevation_gain?: number
          recent_ride_totals?: Schema1
          recent_run_totals?: Schema1
          recent_swim_totals?: Schema1
          ytd_ride_totals?: Schema1
          ytd_run_totals?: Schema1
          ytd_swim_totals?: Schema1
          all_ride_totals?: Schema1
          all_run_totals?: Schema1
          all_swim_totals?: Schema1
        },
        Schema5
      >({
        path: `/athletes/${id}/stats`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a list of the routes created by the authenticated athlete. Private routes are filtered out unless requested by a token with read_all scope.
     *
     * @tags Routes
     * @name GetRoutesByAthleteId
     * @summary List Athlete Routes
     * @request GET:/athletes/{id}/routes
     * @secure
     */
    getRoutesByAthleteId: (
      id: string,
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<Schema23[], Schema5>({
        path: `/athletes/${id}/routes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  athlete = {
    /**
     * @description Returns the currently authenticated athlete. Tokens with profile:read_all scope will receive a detailed athlete representation; all others will receive a summary representation.
     *
     * @tags Athletes
     * @name GetLoggedInAthlete
     * @summary Get Authenticated Athlete
     * @request GET:/athlete
     * @secure
     */
    getLoggedInAthlete: (params: RequestParams = {}) =>
      this.request<Schema6, Schema5>({
        path: `/athlete`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update the currently authenticated athlete. Requires profile:write scope.
     *
     * @tags Athletes
     * @name UpdateLoggedInAthlete
     * @summary Update Athlete
     * @request PUT:/athlete
     * @secure
     */
    updateLoggedInAthlete: (
      weight: number,
      data?: any,
      params: RequestParams = {}
    ) =>
      this.request<Schema6, Schema5>({
        path: `/athlete`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the the authenticated athlete's heart rate and power zones. Requires profile:read_all.
     *
     * @tags Athletes
     * @name GetLoggedInAthleteZones
     * @summary Get Zones
     * @request GET:/athlete/zones
     * @secure
     */
    getLoggedInAthleteZones: (params: RequestParams = {}) =>
      this.request<
        {
          heart_rate?: { custom_zones?: boolean; zones?: Schema8 }
          power?: { zones?: Schema8 }
        },
        Schema5
      >({
        path: `/athlete/zones`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the activities of an athlete for a specific identifier. Requires activity:read. Only Me activities will be filtered out unless requested by a token with activity:read_all.
     *
     * @tags Activities
     * @name GetLoggedInAthleteActivities
     * @summary List Athlete Activities
     * @request GET:/athlete/activities
     * @secure
     */
    getLoggedInAthleteActivities: (
      query?: {
        before?: number
        after?: number
        page?: number
        per_page?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema14[], Schema5>({
        path: `/athlete/activities`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a list of the clubs whose membership includes the authenticated athlete.
     *
     * @tags Clubs
     * @name GetLoggedInAthleteClubs
     * @summary List Athlete Clubs
     * @request GET:/athlete/clubs
     * @secure
     */
    getLoggedInAthleteClubs: (
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<Schema3[], Schema5>({
        path: `/athlete/clubs`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  segments = {
    /**
     * @description Returns the specified segment. read_all scope required in order to retrieve athlete-specific segment information, or to retrieve private segments.
     *
     * @tags Segments
     * @name GetSegmentById
     * @summary Get Segment
     * @request GET:/segments/{id}
     * @secure
     */
    getSegmentById: (id: number, params: RequestParams = {}) =>
      this.request<{ map?: Schema22 }, Schema5>({
        path: `/segments/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description List of the authenticated athlete's starred segments. Private segments are filtered out unless requested by a token with read_all scope.
     *
     * @tags Segments
     * @name GetLoggedInAthleteStarredSegments
     * @summary List Starred Segments
     * @request GET:/segments/starred
     * @secure
     */
    getLoggedInAthleteStarredSegments: (
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<
        { start_latlng?: Schema10; athlete_pr_effort?: Schema12 }[],
        Schema5
      >({
        path: `/segments/starred`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Stars/Unstars the given segment for the authenticated athlete. Requires profile:write scope.
     *
     * @tags Segments
     * @name StarSegment
     * @summary Star Segment
     * @request PUT:/segments/{id}/starred
     * @secure
     */
    starSegment: (
      id: number,
      data: { starred: boolean },
      params: RequestParams = {}
    ) =>
      this.request<Schema11, Schema5>({
        path: `/segments/${id}/starred`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the top 10 segments matching a specified query.
     *
     * @tags Segments
     * @name ExploreSegments
     * @summary Explore segments
     * @request GET:/segments/explore
     * @secure
     */
    exploreSegments: (
      query: {
        bounds: number[]
        activity_type?: 'running' | 'riding'
        min_cat?: number
        max_cat?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          segments?: {
            id?: number
            name?: string
            climb_category?: number
            climb_category_desc?: 'NC' | '4' | '3' | '2' | '1' | 'HC'
            avg_grade?: number
            start_latlng?: Schema10
            end_latlng?: Schema10
            elev_difference?: number
            distance?: number
            points?: string
          }[]
        },
        Schema5
      >({
        path: `/segments/explore`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the given segment's streams. Requires read_all scope for private segments.
     *
     * @tags Streams
     * @name GetSegmentStreams
     * @summary Get Segment Streams
     * @request GET:/segments/{id}/streams
     * @secure
     */
    getSegmentStreams: (
      id: number,
      query: {
        keys: ('distance' | 'latlng' | 'altitude')[]
        key_by_type: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema26, Schema5>({
        path: `/segments/${id}/streams`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  segmentEfforts = {
    /**
     * @description Returns a set of the authenticated athlete's segment efforts for a given segment.  Requires subscription.
     *
     * @tags SegmentEfforts
     * @name GetEffortsBySegmentId
     * @summary List Segment Efforts
     * @request GET:/segment_efforts
     * @secure
     */
    getEffortsBySegmentId: (
      query: {
        segment_id: number
        start_date_local?: string
        end_date_local?: string
        per_page?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<{ activity?: Schema18; athlete?: Schema19 }[], Schema5>({
        path: `/segment_efforts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a segment effort from an activity that is owned by the authenticated athlete. Requires subscription.
     *
     * @tags SegmentEfforts
     * @name GetSegmentEffortById
     * @summary Get Segment Effort
     * @request GET:/segment_efforts/{id}
     * @secure
     */
    getSegmentEffortById: (id: number, params: RequestParams = {}) =>
      this.request<Schema13, Schema5>({
        path: `/segment_efforts/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.
     *
     * @tags Streams
     * @name GetSegmentEffortStreams
     * @summary Get Segment Effort Streams
     * @request GET:/segment_efforts/{id}/streams
     * @secure
     */
    getSegmentEffortStreams: (
      id: number,
      query: {
        keys: (
          | 'time'
          | 'distance'
          | 'latlng'
          | 'altitude'
          | 'velocity_smooth'
          | 'heartrate'
          | 'cadence'
          | 'watts'
          | 'temp'
          | 'moving'
          | 'grade_smooth'
        )[]
        key_by_type: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema26, Schema5>({
        path: `/segment_efforts/${id}/streams`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  activities = {
    /**
     * @description Creates a manual activity for an athlete, requires activity:write scope.
     *
     * @tags Activities
     * @name CreateActivity
     * @summary Create an Activity
     * @request POST:/activities
     * @secure
     */
    createActivity: (
      data: {
        name: string
        type?: string
        sport_type: string
        start_date_local: string
        elapsed_time: number
        description?: string
        distance?: number
        trainer?: number
        commute?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema17, Schema5>({
        path: `/activities`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the given activity that is owned by the authenticated athlete. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.
     *
     * @tags Activities
     * @name GetActivityById
     * @summary Get Activity
     * @request GET:/activities/{id}
     * @secure
     */
    getActivityById: (
      id: number,
      query?: { include_all_efforts?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<Schema17, Schema5>({
        path: `/activities/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates the given activity that is owned by the authenticated athlete. Requires activity:write. Also requires activity:read_all in order to update Only Me activities
     *
     * @tags Activities
     * @name UpdateActivityById
     * @summary Update Activity
     * @request PUT:/activities/{id}
     * @secure
     */
    updateActivityById: (
      id: number,
      body: {
        commute?: boolean
        trainer?: boolean
        hide_from_home?: boolean
        description?: string
        name?: string
        type?: Schema20
        sport_type?: Schema21
        gear_id?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema17, Schema5>({
        path: `/activities/${id}`,
        method: 'PUT',
        body: body,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the laps of an activity identified by an identifier. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.
     *
     * @tags Activities
     * @name GetLapsByActivityId
     * @summary List Activity Laps
     * @request GET:/activities/{id}/laps
     * @secure
     */
    getLapsByActivityId: (id: number, params: RequestParams = {}) =>
      this.request<Schema16[], Schema5>({
        path: `/activities/${id}/laps`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Summit Feature. Returns the zones of a given activity. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.
     *
     * @tags Activities
     * @name GetZonesByActivityId
     * @summary Get Activity Zones
     * @request GET:/activities/{id}/zones
     * @secure
     */
    getZonesByActivityId: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          score?: number
          distribution_buckets?: (Schema7 & { time?: number })[]
          type?: 'heartrate' | 'power'
          sensor_based?: boolean
          points?: number
          custom_zones?: boolean
          max?: number
        }[],
        Schema5
      >({
        path: `/activities/${id}/zones`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the comments on the given activity. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.
     *
     * @tags Activities
     * @name GetCommentsByActivityId
     * @summary List Activity Comments
     * @request GET:/activities/{id}/comments
     * @secure
     */
    getCommentsByActivityId: (
      id: number,
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          id?: number
          activity_id?: number
          text?: string
          athlete?: Schema2
          created_at?: string
        }[],
        Schema5
      >({
        path: `/activities/${id}/comments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the athletes who kudoed an activity identified by an identifier. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.
     *
     * @tags Activities
     * @name GetKudoersByActivityId
     * @summary List Activity Kudoers
     * @request GET:/activities/{id}/kudos
     * @secure
     */
    getKudoersByActivityId: (
      id: number,
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<Schema2[], Schema5>({
        path: `/activities/${id}/kudos`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns the given activity's streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.
     *
     * @tags Streams
     * @name GetActivityStreams
     * @summary Get Activity Streams
     * @request GET:/activities/{id}/streams
     * @secure
     */
    getActivityStreams: (
      id: number,
      query: {
        keys: (
          | 'time'
          | 'distance'
          | 'latlng'
          | 'altitude'
          | 'velocity_smooth'
          | 'heartrate'
          | 'cadence'
          | 'watts'
          | 'temp'
          | 'moving'
          | 'grade_smooth'
        )[]
        key_by_type: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema26, Schema5>({
        path: `/activities/${id}/streams`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  clubs = {
    /**
     * @description Returns a given club using its identifier.
     *
     * @tags Clubs
     * @name GetClubById
     * @summary Get Club
     * @request GET:/clubs/{id}
     * @secure
     */
    getClubById: (id: number, params: RequestParams = {}) =>
      this.request<
        Schema3 & {
          membership?: 'member' | 'pending'
          admin?: boolean
          owner?: boolean
          following_count?: number
        },
        Schema5
      >({
        path: `/clubs/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a list of the athletes who are members of a given club.
     *
     * @tags Clubs
     * @name GetClubMembersById
     * @summary List Club Members
     * @request GET:/clubs/{id}/members
     * @secure
     */
    getClubMembersById: (
      id: number,
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<Schema2[], Schema5>({
        path: `/clubs/${id}/members`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a list of the administrators of a given club.
     *
     * @tags Clubs
     * @name GetClubAdminsById
     * @summary List Club Administrators
     * @request GET:/clubs/{id}/admins
     * @secure
     */
    getClubAdminsById: (
      id: number,
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<Schema2[], Schema5>({
        path: `/clubs/${id}/admins`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Retrieve recent activities from members of a specific club. The authenticated athlete must belong to the requested club in order to hit this endpoint. Pagination is supported. Athlete profile visibility is respected for all activities.
     *
     * @tags Clubs
     * @name GetClubActivitiesById
     * @summary List Club Activities
     * @request GET:/clubs/{id}/activities
     * @secure
     */
    getClubActivitiesById: (
      id: number,
      query?: { page?: number; per_page?: number },
      params: RequestParams = {}
    ) =>
      this.request<Schema14[], Schema5>({
        path: `/clubs/${id}/activities`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  gear = {
    /**
     * @description Returns an equipment using its identifier.
     *
     * @tags Gears
     * @name GetGearById
     * @summary Get Equipment
     * @request GET:/gear/{id}
     * @secure
     */
    getGearById: (id: string, params: RequestParams = {}) =>
      this.request<
        Schema4 & {
          brand_name?: string
          model_name?: string
          frame_type?: number
          description?: string
        },
        Schema5
      >({
        path: `/gear/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  routes = {
    /**
     * @description Returns a route using its identifier. Requires read_all scope for private routes.
     *
     * @tags Routes
     * @name GetRouteById
     * @summary Get Route
     * @request GET:/routes/{id}
     * @secure
     */
    getRouteById: (id: number, params: RequestParams = {}) =>
      this.request<Schema23, Schema5>({
        path: `/routes/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns a GPX file of the route. Requires read_all scope for private routes.
     *
     * @tags Routes
     * @name GetRouteAsGpx
     * @summary Export Route GPX
     * @request GET:/routes/{id}/export_gpx
     * @secure
     */
    getRouteAsGpx: (id: number, params: RequestParams = {}) =>
      this.request<File, Schema5>({
        path: `/routes/${id}/export_gpx`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a TCX file of the route. Requires read_all scope for private routes.
     *
     * @tags Routes
     * @name GetRouteAsTcx
     * @summary Export Route TCX
     * @request GET:/routes/{id}/export_tcx
     * @secure
     */
    getRouteAsTcx: (id: number, params: RequestParams = {}) =>
      this.request<File, Schema5>({
        path: `/routes/${id}/export_tcx`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the given route's streams. Requires read_all scope for private routes.
     *
     * @tags Streams
     * @name GetRouteStreams
     * @summary Get Route Streams
     * @request GET:/routes/{id}/streams
     * @secure
     */
    getRouteStreams: (id: number, params: RequestParams = {}) =>
      this.request<Schema26, Schema5>({
        path: `/routes/${id}/streams`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  uploads = {
    /**
     * @description Uploads a new data file to create an activity from. Requires activity:write scope.
     *
     * @tags Uploads
     * @name CreateUpload
     * @summary Upload Activity
     * @request POST:/uploads
     * @secure
     */
    createUpload: (
      data: {
        file?: File
        name?: string
        description?: string
        trainer?: string
        commute?: string
        data_type?: 'fit' | 'fit.gz' | 'tcx' | 'tcx.gz' | 'gpx' | 'gpx.gz'
        external_id?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<Schema24, Schema5>({
        path: `/uploads`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns an upload for a given identifier. Requires activity:write scope.
     *
     * @tags Uploads
     * @name GetUploadById
     * @summary Get Upload
     * @request GET:/uploads/{uploadId}
     * @secure
     */
    getUploadById: (uploadId: number, params: RequestParams = {}) =>
      this.request<Schema24, Schema5>({
        path: `/uploads/${uploadId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
}

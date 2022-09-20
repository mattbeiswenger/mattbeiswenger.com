import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://c993dd7109e14d4fbf0ab33a7b444628@o346010.ingest.sentry.io/6761543',
  tracesSampleRate: 1.0,
})

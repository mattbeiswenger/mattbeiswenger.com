import { verifySignature } from '@upstash/qstash/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs'

/**
 * This lambda function is used to refresh the strava access token and update
 * both the refresh and access token environment variables in vercel.
 * This function gets triggered by qstash every 3 hours.
 */

async function updateEnvironmentVariable(id: string, value: string) {
  await fetch(
    `https://api.vercel.com/v9/projects/mattbeiswenger-com/env/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ value, type: 'plain' }),
      headers: { Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}` },
    }
  )
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const STRAVA_ACCESS_TOKEN_ID = 'n95wSDTs6fiVxtaK'
  const STRAVA_REFRESH_TOKEN_ID = 'vADUJDMkV8VI2ufN'

  if (req.method === 'POST') {
    try {
      if (
        process.env.STRAVA_CLIENT_ID &&
        process.env.STRAVA_CLIENT_SECRET &&
        process.env.STRAVA_REFRESH_TOKEN
      ) {
        const params = new URLSearchParams({
          client_id: process.env.STRAVA_CLIENT_ID,
          client_secret: process.env.STRAVA_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        }).toString()

        const response = await fetch(
          `https://www.strava.com/api/v3/oauth/token?${params.toString()}`,
          { method: 'POST' }
        )

        const { access_token, refresh_token } = await response.json()

        await Promise.all([
          updateEnvironmentVariable(STRAVA_ACCESS_TOKEN_ID, access_token),
          updateEnvironmentVariable(STRAVA_REFRESH_TOKEN_ID, refresh_token),
        ])

        res.status(200).json({ success: true })
      } else {
        throw Error('Missing required environment variable')
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json({ statusCode: 500, message: e.message })
      }
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default withSentry(verifySignature(handler))

export const config = {
  api: {
    bodyParser: false,
  },
}

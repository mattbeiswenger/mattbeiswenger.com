import { verifySignature } from '@upstash/qstash/nextjs'

/**
 * This lambda function is used to refresh the strava access token and update
 * both the refresh and access token environment variables in vercel.
 * This function gets triggered by qstash every 3 hours.
 */

async function updateEnvironmentVariable(key, id, value) {
  console.log(id, value)
  console.log(typeof value)
  console.log(typeof `${value}`)
  const response = await fetch(
    `https://api.vercel.com/v9/projects/mattbeiswenger-com/env/${id}`,
    {
      method: 'PATCH',
      body: {
        value: `${value}`,
        target: ['Production', 'Preview', 'Development'],
        key: `${key}`,
      },
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      },
    }
  )
  const data = await response.json()
  console.log(data)
}

async function handler(req, res) {
  const STRAVA_ACCESS_TOKEN_ID = 'n95wSDTs6fiVxtaK'
  const STRAVA_REFRESH_TOKEN_ID = 'vADUJDMkV8VI2ufN'

  if (req.method === 'POST') {
    try {
      const params = new URLSearchParams({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      })

      const response = await fetch(
        `https://www.strava.com/api/v3/oauth/token?${params.toString()}`,
        { method: 'POST' }
      )

      const { access_token, refresh_token } = await response.json()
      console.log('ACCESS_TOKEN', access_token)
      console.log('REFRESH_TOKEN', refresh_token)

      console.log('before invocation')

      await Promise.all([
        updateEnvironmentVariable(
          'STRAVA_ACCESS_TOKEN',
          STRAVA_ACCESS_TOKEN_ID,
          access_token
        ),
        updateEnvironmentVariable(
          'STRAVA_REFRESH_TOKEN',
          STRAVA_REFRESH_TOKEN_ID,
          refresh_token
        ),
      ])

      console.log('after invocation')

      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default verifySignature(handler)

export const config = {
  api: {
    bodyParser: false,
  },
}

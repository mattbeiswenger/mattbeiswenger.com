import { verifySignature } from '@upstash/qstash/nextjs'

async function handler(req, res) {
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
        {
          method: 'POST',
        }
      )
      const data = await response.json()
      console.log(data)
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

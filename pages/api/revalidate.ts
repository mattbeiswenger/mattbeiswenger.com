import { NextApiRequest, NextApiResponse } from 'next'
import { verifySignature } from '@upstash/qstash/nextjs'

/**
 * Revalidate home page and activities page
 * This route gets triggered by qstash once an hour
 */

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Revalidating...')
    await Promise.all([res.revalidate('/'), res.revalidate('/activities')])
    return res.status(200).send('Success!')
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default verifySignature(handler)

export const config = {
  api: {
    bodyParser: false,
  },
}

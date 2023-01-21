import { NextApiRequest, NextApiResponse } from 'next'
import { verifySignature } from '@upstash/qstash/nextjs'

/**
 * Revalidate home page and activities page
 * https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
 */

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/activities')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default verifySignature(handler)

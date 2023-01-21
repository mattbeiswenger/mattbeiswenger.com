import { NextApiRequest, NextApiResponse } from 'next'
import { verifySignature } from '@upstash/qstash/nextjs'

/**
 * Revalidate home page and activities page
 * https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
 */

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!('secret' in req.body)) {
    return res.status(401).json({ message: 'No token provided' })
  }
  if (req.body.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(403).json({ message: 'Invalid token' })
  }

  try {
    console.log('[Next.js] Revalidating /')
    await res.revalidate('/')
    console.log('[Next.js] Revalidating /activities')
    await res.revalidate('/activities')
    return res.status(200).send('Success!')
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default verifySignature(handler)

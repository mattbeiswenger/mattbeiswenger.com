import { NextApiRequest, NextApiResponse } from 'next'
import { verifySignature } from '@upstash/qstash/nextjs'

/**
 * Revalidate home page and activities page
 * https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
 */

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = await readBody(req)
  console.log(body)

  // if (!('secret' in req.body)) {
  //   return res.status(401).json({ message: 'No token provided' })
  // }
  // if (req.body.secret !== process.env.REVALIDATION_TOKEN) {
  //   return res.status(403).json({ message: 'Invalid token' })
  // }

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

async function readBody(readable: NextApiRequest) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

import type { NextApiRequest, NextApiResponse } from 'next'
import type { Vote } from '~types/vote'
import * as z from 'zod'
import { serialize } from 'cookie'
import { prisma } from '~utils/db'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  const body: Vote = req.body
  try {
    z.object({
      voteFor: z.union([z.literal('HAPPY'), z.literal('SAD')]),
    }).parse(body)
  } catch (e) {
    res.status(400).end()
    return
  }
  const vote = await prisma.vote.create({
    data: { ...body },
  })
  if (!vote) {
    res.status(500).end()
    return
  }
  const cookie = serialize('happy-or-sad', body.voteFor.toLowerCase(), {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  res.setHeader('Set-Cookie', cookie)
  res.status(200).json(body.voteFor.toLowerCase())
  return
}
export default handler

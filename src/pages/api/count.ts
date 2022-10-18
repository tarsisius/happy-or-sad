import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '~utils/db'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }
  const happy = await prisma.vote.count({
    where: {
      voteFor: 'HAPPY',
    },
  })
  const sad = await prisma.vote.count({
    where: {
      voteFor: 'SAD',
    },
  })
  res.status(200).json({ happy, sad })
  return
}
export default handler

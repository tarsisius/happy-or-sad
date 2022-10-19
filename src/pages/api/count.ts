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
  if (!happy) {
    res.status(206).json({ happy: 0, sad })
    return
  }
  if (!sad) {
    res.status(206).json({ happy, sad: 0 })
    return
  }
  res.status(200).json({ happy, sad })
  return
}
export default handler

import type { MouseEvent } from 'react'
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { parse } from 'cookie'

import Condition from '~components/condition'

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  const [choice, setChoice] = useState<string>()
  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const req = await fetch('/api/vote', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voteFor: e.currentTarget.value,
      }),
      method: 'POST',
    })
    const res = await req.json()
    setChoice(res)
  }

  const cookie = props.cookies as string
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name='description' content='Happy or Sad' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='front'>
        <div className='vote'>
          <Condition
            cookie={cookie}
            choice={choice}
            handleClick={handleClick}
          />
        </div>
        <div className='link'>
          <Link href='/result'>see what people have voted</Link>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = context.req.headers.cookie
  if (!cookies) {
    return { props: {} }
  }
  return {
    props: {
      cookies: parse(cookies)['happy-or-sad'],
    },
  }
}

export default Home

import type { InferGetServerSidePropsType } from 'next'
import Pie from '~components/pie'

const Result = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div className='result'>
      <h1>Result</h1>
      <Pie data={props} />
      <span>
        <p>
          <span className='green'>Green</span> for happy
        </p>
        <p>
          <span className='red'>Red</span> for sad
        </p>
      </span>
    </div>
  )
}

export const getServerSideProps = async () => {
  const req = await fetch(`${process.env.APP_URL}/api/count`)
  const res = await req.json()
  if (!req.ok) {
    return {
      props: {},
    }
  }
  return {
    props: res,
  }
}
export default Result

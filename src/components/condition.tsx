import type { MouseEvent } from 'react'
import Child from '~components/child'

type Props = {
  choice?: string
  cookie: string
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Condition = (props: Props) => {
  const { choice, cookie, handleClick } = props
  return (
    <>
      {choice === 'sad' && <h1>awokawok, sama cok!</h1>}
      {choice === 'happy' && <h1>cool, enjoy the happiness!</h1>}
      {cookie === 'sad' && <h1>you're sad today, choose again tomorrow</h1>}
      {cookie === 'happy' && <h1>you're happy today, choose again tomorrow</h1>}
      {!cookie && !choice && (
        <>
          <h1>Happy or Sad?</h1>
          <div className='row'>
            <Child value='HAPPY' onClick={handleClick}>
              Happy
            </Child>
            <Child value='SAD' onClick={handleClick}>
              Sad
            </Child>
          </div>
        </>
      )}
    </>
  )
}
export default Condition

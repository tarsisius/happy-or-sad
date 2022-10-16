import type { FC, MouseEvent, ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  value: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}
const Child: FC<Props> = (props) => {
  return (
    <div className='child'>
      <Image
        src={`/${props.value.toLowerCase()}.svg`}
        width={150}
        height={200}
        alt={props.value.toLowerCase()}
      />
      <span className='bottom'>
        <button type='button' value={props.value} onClick={props.onClick}>
          {props.children}
        </button>
      </span>
    </div>
  )
}
export default Child

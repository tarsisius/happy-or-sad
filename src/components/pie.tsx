import type { FC } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

type Props = {
  data: { happy: number; sad: number }
}

const Pie: FC<Props> = (props) => {
  return (
    <div className='pie'>
      <PieChart
        data={[
          { title: 'Sad', value: props.data.sad, color: 'rgb(239 68 68 / 1)' },
          { title: 'Happy', value: props.data.happy, color: 'rgb(34 197 94 / 1)' },
        ]}
      />
    </div>
  )
}
export default Pie

import type { FC } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

type Props = {
  data: { happy: number; sad: number }
}

const Pie: FC<Props> = (props) => {

  const lineWidth = 60
  return (
    <div className='pie'>
      <PieChart
        data={[
          {
            title: 'Sad',
            value: props.data.sad,
            color: 'rgb(239 68 68 / 1)',
          },
          {
            title: 'Happy',
            value: props.data.happy,
            color: 'rgb(34 197 94 / 1)',
          },
        ]}
        radius={44}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        lineWidth={lineWidth}
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fill: '#fff',
          opacity: 0.75,
          pointerEvents: 'none',
          fontSize: '12px',
        }}
      />
    </div>
  )
}
export default Pie

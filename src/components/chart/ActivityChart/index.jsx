import { BarChart, XAxis, YAxis, ReferenceArea, ReferenceDot, ReferenceLine, Brush, CartesianGrid, Legend, Tooltip, Bar, Customized } from 'recharts'
import { USER_ACTIVITY } from '../../../data/mock-data'
import CustomToolTip from './tooltip'
import '../../../styles/activityChart.css'

function ActivityChart({ id }) {
  const userData = USER_ACTIVITY.filter((element) => element.userId === parseInt(id))

  return (
    <article className="activityChart">
      <div className="title-legend">
        <h2 className="chartTitle">Activité quotidienne</h2>
        <div className="legend">
          <div className="legendeContainer">
            {' '}
            <i className="fa-solid fa-circle"></i> <p className="legendePoids"> Poids (kg)</p>
          </div>
          <div className="legendContainer">
            {' '}
            <i className="fa-solid fa-circle"></i> <p className="legendCalories"> Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <BarChart
        barGap={8}
        width={835}
        height={320}
        data={userData[0].sessions}
        margin={{
          top: 100,
          right: 30,
          left: 40,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <XAxis dataKey="day" tickFormatter={(day) => new Date(day).getDate()} tickLine={false} tick={{ fill: '#9B9EAC' }} padding={{ left: -47, right: -48 }} domain={['dataMin', 'dataMax']} tickMargin={10} />

        <YAxis dataKey="kilogram" yAxisId="kilogram" orientation="right" tickLine={false} tick={{ fill: '#9B9EAC' }} axisLine={false} tickMargin={30} domain={['dataMin-2', 'dataMax+2']} tickCount={4} />

        <YAxis hide dataKey="calories" yAxisId="calories" orientation="right" domain={[0, 'dataMax+5']} />

        <Tooltip content={<CustomToolTip />} wrapperStyle={{ backgroundColor: '#FFF', boxShadow: 'none', margin: '0 20px' }} />

        {/* <Legend
          className="legend"
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize="10"
          height={80}
          payload={[
            { value: 'Poids (kg)', type: '', id: 'kilogram', color: '#282D30' },
            { value: 'Calories brûlées (kCal)', type: 'circle', id: 'calories', color: '#E60000' }
          ]}
          wrapperStyle={{ top: 20, color: 'red' }}
        /> */}

        <Bar dataKey="kilogram" yAxisId={'kilogram'} fill="#282D30" barSize={7} radius={[3.5, 3.5, 0, 0]} />

        <Bar dataKey="calories" yAxisId={'calories'} fill="#E60000" barSize={7} radius={[3.5, 3.5, 0, 0]} />
      </BarChart>
    </article>
  )
}

export default ActivityChart

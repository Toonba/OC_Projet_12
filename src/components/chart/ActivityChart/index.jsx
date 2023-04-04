import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts'
import { USER_ACTIVITY } from '../../../data/mock-data'
import CustomToolTip from './tooltip'
import '../../../styles/activityChart.css'

function ActivityChart({ id }) {
  const userData = USER_ACTIVITY.filter((element) => element.userId === parseInt(id))

  return (
    <aside className="activityChart">
      <div className="title-legend">
        <h2 className="chartTitle">Activité quotidienne</h2>
        <div className="legend">
          <div className="legend1">
            <i className="fa-solid fa-circle"></i>
            <p className="legendePoids">Poids (kg)</p>
          </div>
          <div className="legend2">
            <i className="fa-solid fa-circle"></i>
            <p className="legendCalories">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <BarChart
        barGap={8}
        width={840}
        height={300}
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

        <Bar dataKey="kilogram" yAxisId={'kilogram'} fill="#282D30" barSize={7} radius={[3.5, 3.5, 0, 0]} />

        <Bar dataKey="calories" yAxisId={'calories'} fill="#E60000" barSize={7} radius={[3.5, 3.5, 0, 0]} />
      </BarChart>
    </aside>
  )
}

export default ActivityChart

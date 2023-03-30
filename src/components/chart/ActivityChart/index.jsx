import { BarChart, XAxis, YAxis, ReferenceArea, ReferenceDot, ReferenceLine, Brush, CartesianGrid, Legend, Tooltip, Bar, Customized } from 'recharts'
import { USER_ACTIVITY } from '../../../data/mock-data'

function ActivityChart({ id }) {
  const userData = USER_ACTIVITY.filter((element) => element.userId === parseInt(id))

  return (
    <article className='activityChart'>
      <p>Activité quotidienne</p>
    <BarChart width={835} height={320} data={userData[0].sessions}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" tickFormatter={(day) => new Date(day).getDate()} tickLine={false} tick={{ fill: '#9B9EAC' }} />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={56} />
      <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
      <Bar dataKey="calories" fill="#E60000" barSize={7} />
    </BarChart>
    </article>
  )
}

export default ActivityChart

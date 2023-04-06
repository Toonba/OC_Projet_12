import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from 'recharts'
import { CustomToolTip, CustomHover } from './tooltip'
import '../../../styles/trainingTimeChart.css'
import PropTypes from 'prop-types'

/**
 * @param {object} data data of user average session
 * @returns line chart of average duration of sessions
 */

function TrainingTimeChart({ data }) {
  const userData = data
  const dayOfWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
  const formattedDay = (day) => dayOfWeek[day]

  return (
    <aside className="trainingTimeChart">
      <h2 className="chartTitle">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart width={260} height={230} data={userData.sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="day" tick={{ fill: '#FFFFFF', dx: 20 }} tickLine={false} axisLine={false} tickMargin={0} tickFormatter={formattedDay} padding={{ left: -15, right: 0 }} />
        <YAxis hide domain={['dataMin-10', 'dataMax+20']} />
        <Tooltip content={<CustomToolTip />} cursor={<CustomHover />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeOpacity={0.5}
          activeDot={{
            background: '#FFFFFF',
            stroke: 'rgba(255, 255, 255, 0.3)',
            strokeWidth: 10,
            r: 4
          }}
          dot={false}
        />
      </LineChart>
      </ResponsiveContainer>
    </aside>
  )
}

TrainingTimeChart.propTypes = {
  data: PropTypes.object.isRequired
}

export default TrainingTimeChart

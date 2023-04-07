import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts'
import CustomToolTip from './tooltip'
import '../../../styles/activityChart.css'
import PropTypes from 'prop-types'
import React from 'react'

/**
 *
 * @param {Array} data user's calorie burnt and user's weight for each day
 * @return {React.Component} barChart of user's daily calories burnt and weight
 */
function ActivityChart({ data }) {
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

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barGap={8}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 40,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="day" tickLine={false} tick={{ fill: '#9B9EAC' }} padding={{ left: -30, right: -30 }} domain={['dataMin', 'dataMax']} tickMargin={10} />

          <YAxis dataKey="kilogram" yAxisId="kilogram" orientation="right" tickLine={false} tick={{ fill: '#9B9EAC' }} axisLine={false} tickMargin={30} domain={['dataMin-2', 'dataMax+2']} tickCount={4} />

          <YAxis hide dataKey="calories" yAxisId="calories" orientation="right" domain={[0, 'dataMax+5']} />

          <Tooltip content={<CustomToolTip />} wrapperStyle={{ backgroundColor: '#FFF', boxShadow: 'none', margin: '0 20px' }} />

          <Bar dataKey="kilogram" yAxisId={'kilogram'} fill="#282D30" barSize={7} radius={[3.5, 3.5, 0, 0]} />

          <Bar dataKey="calories" yAxisId={'calories'} fill="#E60000" barSize={7} radius={[3.5, 3.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </aside>
  )
}

ActivityChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default ActivityChart

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import '../../../styles/performanceChart.css'
import PropTypes from 'prop-types'

/**
 *
 * @param {Array} data data of user performance for each kind 
 * @returns radar chart of user performance
 */

function PerformanceChart({ data }) {

  return (
    <aside className="performanceChart">
      <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} width={250} height={230} margin={{ top: 0, right: 25, bottom: 0, left: 25 }} startAngle={-510} endAngle={-150}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: '8px', dy: 4 }} radius={50} />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
      </RadarChart>
      </ResponsiveContainer>
    </aside>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default PerformanceChart

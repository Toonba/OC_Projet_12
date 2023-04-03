import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { USER_PERFORMANCE } from '../../../data/mock-data'
import '../../../styles/performanceChart.css'

function PerformanceChart({ id }) {
  const userData = USER_PERFORMANCE.filter((element) => element.userId === parseInt(id))
  const dataKind = userData[0].kind
  const formattedKind = (value) => dataKind[value]

  return (
    <aside className="performanceChart">
      <RadarChart data={userData[0].data} width={260} height={250} margin={{ top: 0, right: 25, bottom: 0, left: 25 }} startAngle={30} endAngle={-330}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tickFormatter={formattedKind} tick={{ fill: '#FFFFFF', fontSize: '12px', dy: 4 }} />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
      </RadarChart>
    </aside>
  )
}

export default PerformanceChart

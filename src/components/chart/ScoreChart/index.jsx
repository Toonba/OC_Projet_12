import { PieChart, Pie, Cell } from 'recharts'
import { USER_MAIN_DATA } from '../../../data/mock-data'

import '../../../styles/scoreChart.css'

function ScoreChart({ id }) {
  const userData = USER_MAIN_DATA.filter((element) => element.id === parseInt(id))
  const score = parseInt(userData[0].todayScore)
  console.log(userData[0])
  const data = [
    { name: 'score', value: userData[0].todayScore },
    { name: 'empty', value: 1 - userData[0].todayScore }
  ]
  const COLORS = ['#ff0000', '#FFFFFF']

  return (
    <aside className="scoreChart">
      <h2>Score</h2>
      <div className="scoreLegend">
        <p>
          <strong>{`${userData[0].todayScore * 100}%`}</strong>
          <br />
          de votre <br /> obectif
        </p>
      </div>
      <PieChart width={250} height={230} margin={{ top: 60, right: 25, bottom: 0, left: 30 }}>
        <Pie data={data} startAngle={90} endAngle={450} innerRadius={88} outerRadius={100} cornerRadius={10} dataKey="value">
          <Cell fill={'#e60000'} />
          <Cell fill={'transparent'} stroke={'transparent'} />
        </Pie>
        <Pie outerRadius={85} fill={'#FFFFFF'} data={[{ name: 'background', value: 100 }]} dataKey="value" />
      </PieChart>
    </aside>
  )
}

export default ScoreChart

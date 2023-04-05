import { PieChart, Pie, Cell } from 'recharts'

import '../../../styles/scoreChart.css'

function ScoreChart({ data }) {
  const userData = data
  console.log(data)
  const scoreData = [
    { name: 'score', value: userData.todayScore },
    { name: 'empty', value: 1 - userData.todayScore }
  ]

  return (
    <aside className="scoreChart">
      <h2>Score</h2>
      <div className="scoreLegend">
        <p>
          <strong>{`${userData.todayScore * 100}%`}</strong>
          <br />
          de votre <br /> obectif
        </p>
      </div>
      <PieChart width={250} height={230} margin={{ top: 60, right: 25, bottom: 0, left: 30 }}>
        <Pie data={scoreData} startAngle={90} endAngle={450} innerRadius={88} outerRadius={100} cornerRadius={10} dataKey="value">
          <Cell fill={'#e60000'} />
          <Cell fill={'transparent'} stroke={'transparent'} />
        </Pie>
        <Pie outerRadius={85} fill={'#FFFFFF'} data={[{ name: 'background', value: 100 }]} dataKey="value" />
      </PieChart>
    </aside>
  )
}

export default ScoreChart

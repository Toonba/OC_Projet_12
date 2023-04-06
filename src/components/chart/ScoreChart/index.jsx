import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import '../../../styles/scoreChart.css'
import PropTypes from 'prop-types'

/**
 *
 * @param {object} data main datat of user, contain his current score
 * @returns piechart of current user score
 */

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
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={scoreData} startAngle={90} endAngle={450} innerRadius={20} outerRadius={63} cornerRadius={10} dataKey="value">
            <Cell fill={'#e60000'} />
            <Cell fill={'transparent'} stroke={'transparent'} />
          </Pie>
          <Pie outerRadius={50} fill={'#FFFFFF'} data={[{ name: 'background', value: 100 }]} dataKey="value" />
        </PieChart>
      </ResponsiveContainer>
    </aside>
  )
}
ScoreChart.propTypes = {
  data: PropTypes.object.isRequired
}

export default ScoreChart

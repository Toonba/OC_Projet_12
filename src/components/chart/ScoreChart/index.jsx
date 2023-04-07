<<<<<<< HEAD
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import '../../../styles/scoreChart.css'
import PropTypes from 'prop-types'

/**
 *
 * @param {Array} data curent user score and point left to reach maximum 
 * @returns piechart of current user score
 */

function ScoreChart({ data }) {
  return (
    <aside className="scoreChart">
      <h2>Score</h2>
      <div className="scoreLegend">
        <p>
          <strong>{`${data[0].value * 100}%`}</strong>
          <br />
          de votre <br /> obectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0
          }}>
          <Pie data={data} startAngle={90} endAngle={450} innerRadius={20} outerRadius={73} cornerRadius={10} dataKey="value">
            <Cell fill={'#e60000'} />
            <Cell fill={'transparent'} stroke={'transparent'} />
          </Pie>
          <Pie outerRadius={60} fill={'#FFFFFF'} data={[{ name: 'background', value: 100 }]} dataKey="value" />
        </PieChart>
      </ResponsiveContainer>
    </aside>
  )
}
ScoreChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default ScoreChart

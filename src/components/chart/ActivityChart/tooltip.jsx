import PropTypes from 'prop-types'

/**
 * 
 * @param {boolean} active show or hide tooltip
 * @param {array} payload source data
 * @returns custom rendering of tooltip
 */

function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className="toolTip">
        <p>{`${payload[0].value}`}kg</p>
        <p>{`${payload[1].value}`}kcal</p>
      </div>
    )
  }
  return null
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

CustomToolTip.defaultProps = {
  active: null,
  payload: null
}

export default CustomToolTip

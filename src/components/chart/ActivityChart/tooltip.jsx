import PropTypes from 'prop-types'

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

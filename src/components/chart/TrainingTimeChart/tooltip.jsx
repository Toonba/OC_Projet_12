import PropTypes from 'prop-types'

/**
 * 
 * @param {boolean} active show or hide tooltip
 * @param {array} payload source data
 * @returns custom rendering of tooltip
 */

export function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className="toolTip">
        <p>{`${payload[0].value}`} min</p>
      </div>
    )
  }
  return null
}

export const CustomHover = ({ points }) => {
  return <rect x={points[0].x} y={0} height="100%" width="100%" fill="rgba(0, 0, 0, 0.1)" />
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CustomToolTip.defaultProps = {
  active: null,
  payload: null,
};

CustomHover.propTypes = {
  points: PropTypes.array,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

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


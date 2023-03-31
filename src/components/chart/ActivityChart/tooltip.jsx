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

export default CustomToolTip

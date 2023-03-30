import '../../styles/keyDataCard.css'

function KeyDataCard({ logo, count, countName }) {
  return (
    <div className="keyDataCard">
      <img src={logo} alt={`logo-${countName}`} />
      <div>
        <p className="count">{count}</p>
        <p>{countName}</p>
      </div>
    </div>
  )
}

export default KeyDataCard

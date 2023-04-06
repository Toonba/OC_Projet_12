import '../../styles/keyDataCard.css'
import PropTypes from 'prop-types'

/**
 * @param {string} logo path to the desired logo
 * @param {number} count number for the specified keydata
 * @param {string} countName name of the specified keydata
 * @returns {React.Component} aside where key data of user will be displayed
 * this component create a card for each key data by matching a logo with the user related number and keydata's name
 */


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

KeyDataCard.prototype = {
  logo: PropTypes.string,
  count: PropTypes.number,
  countName: PropTypes.string
}

export default KeyDataCard

import KeyDataCard from '../KeyDataCard'
import PropTypes from 'prop-types'

/**
 * @param {object} data user's key data representing several nutriment and their count
 * @returns {React.Component}  where key data of user will be displayed
 */

function KeyData({ data }) {
  
  return (
    <aside className="keyData">
      {data.map((element, index) => (
        <KeyDataCard logo={element.logo} count={element.count} countName={element.countName} key={`${element}-${index}`} />
      ))}
    </aside>
  )
}

KeyData.propTypes = {
  data: PropTypes.array.isRequired
}

export default KeyData

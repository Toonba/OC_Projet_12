import calories from '../../assets/calories-icon.png'
import carbs from '../../assets/carbs-icon.png'
import fat from '../../assets/fat-icon.png'
import protein from '../../assets/protein-icon.png'
import KeyDataCard from '../KeyDataCard'
import PropTypes from 'prop-types'

/**
 * @param {object} data main data of user
 * @returns {React.Component} aside where key data of user will be displayed
 */

function KeyData({ data }) {
  const keyData = data.keyData
  let logo = ''
  let count = ''
  let countName = ''
  let keyDataToUseInComponent = []

  for (const data in keyData) {
    // if key data have a number > 4 then we adjust how the number will look 1000 become 1,000 for better readability
    if (keyData[data].toString().length === 4) {
      const dataModified = keyData[data].toString().split('')
      dataModified.splice(1, 0, ',')
      keyData[data] = dataModified.join('')
    }
    // Assigne to each type of count a logo, unit of measure and name
    switch (data) {
      case 'calorieCount':
        logo = calories
        count = `${keyData[data]}kCal`
        countName = 'Calories'
        break
      case 'proteinCount':
        logo = protein
        count = `${keyData[data]}g`
        countName = 'Proteines'
        break
      case 'carbohydrateCount':
        logo = carbs
        count = `${keyData[data]}g`
        countName = 'Glucides'
        break
      case 'lipidCount':
        logo = fat
        count = `${keyData[data]}g`
        countName = 'Lipides'
        break
      default:
        console.log(`Sorry, we are out of data.`)
    }
    keyDataToUseInComponent.push({ logo, count, countName })
  }

  return (
    <aside className="keyData">
      {keyDataToUseInComponent.map((element, index) => (
        <KeyDataCard logo={element.logo} count={element.count} countName={element.countName} key={`${element}-${index}`} />
      ))}
    </aside>
  )
}

KeyData.propTypes = {
  data: PropTypes.object.isRequired
}

export default KeyData

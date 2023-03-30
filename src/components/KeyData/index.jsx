import calories from '../../assets/calories-icon.png'
import carbs from '../../assets/carbs-icon.png'
import fat from '../../assets/fat-icon.png'
import protein from '../../assets/protein-icon.png'
import KeyDataCard from '../KeyDataCard'
import { USER_MAIN_DATA } from '../../data/mock-data'

function KeyData({ id }) {
  const userData = USER_MAIN_DATA.filter((element) => element.id === parseInt(id))
  const keyData = userData[0].keyData
  let logo = ''
  let count = ''
  let countName = ''
  let keyDataToUseInComponent = []

  for (const data in keyData) {
    if (keyData[data].toString().length === 4) {
      const dataModified = keyData[data].toString().split('')
      dataModified.splice(1, 0, ',')
      keyData[data] = dataModified.join('')
    }
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

export default KeyData

import calories from '../assets/calories-icon.png'
import carbs from '../assets/carbs-icon.png'
import fat from '../assets/fat-icon.png'
import protein from '../assets/protein-icon.png'

/**
 * Represents the main data of a user.
 * Creates a new instance of UserMainData.
 * @param {object} mainData - user's main data
 * @param {object} activityData - user's activity data (weight and calories burnt)
 * @param {object} sessionData - user's session data (lenght of training session)
 * @param {object} performanceData - user's performance data (user's score for each skills)
 */

export class User {
  constructor(mainData, activityData, sessionData, performanceData) {
    this.mainData = mainData
    this.activityData = activityData
    this.sessionData = sessionData
    this.performanceData = performanceData
  }

  /**
   *
   * @returns {string} user's First Name
   */

  getFirstName() {
    return this.mainData.userInfos.firstName
  }

  /**
   *
   * @returns {Array} User's nutriment count linked to a logo and nutriment name
   */

  getKeyData() {
    let data = this.mainData.keyData
    let logo = ''
    let count = ''
    let countName = ''
    let keyData = []

    for (const value in data) {
      //convert original number in US format (ie 1000 = 1,000)
      // link each type of nutriment to logo and name
      switch (value) {
        case 'calorieCount':
          logo = calories
          count = `${new Intl.NumberFormat('en-US').format(data[value])}kCal`
          countName = 'Calories'
          break
        case 'proteinCount':
          logo = protein
          count = `${new Intl.NumberFormat('en-US').format(data[value])}g`
          countName = 'Proteines'
          break
        case 'carbohydrateCount':
          logo = carbs
          count = `${new Intl.NumberFormat('en-US').format(data[value])}g`
          countName = 'Glucides'
          break
        case 'lipidCount':
          logo = fat
          count = `${new Intl.NumberFormat('en-US').format(data[value])}g`
          countName = 'Lipides'
          break
        default:
          console.log(`Sorry, we are out of data.`)
      }
      keyData.push({ logo, count, countName })
    }
    return keyData
  }

  /**
   *
   * @returns {Array} User's daily calorie burnt and weight
   */

  getActivityData() {
    let sessions = []
    for (let session of this.activityData.sessions) {
      sessions.push({
        day: new Date(session.day).getDate(),
        kilogram: session.kilogram,
        calories: session.calories
      })
    }
    return sessions
  }

  /**
   *
   * @returns {Array} user's daily session length with day of the week converted from number to letter
   */

  getTrainingData() {
    const dayOfWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
    let sessions = []
    for (let session of this.sessionData.sessions) {
      // convert each day from number to letter
      sessions.push({ day: dayOfWeek[session.day], sessionLength: session.sessionLength })
    }
    return sessions
  }

  /**
   *
   * @returns {Array} user's performance score for each kinds of skills
   */

  getPerformanceData() {
    const kind = this.performanceData.kind
    for (const value in kind) {
      // transalte each kind in French
      switch (kind[value]) {
        case 'cardio':
          kind[value] = 'Cardio'
          break
        case 'energy':
          kind[value] = 'Energie'
          break
        case 'endurance':
          kind[value] = 'Endurance'
          break
        case 'strength':
          kind[value] = 'Force'
          break
        case 'speed':
          kind[value] = 'Vitesse'
          break
        case 'intensity':
          kind[value] = 'Intensité'
          break
        default:
          console.log(`Sorry, we are out of data.`)
      }
    }
    let performances = []
    for (let performance of this.performanceData.data) {
      performances.push({ value: performance.value, kind: kind[performance.kind] })
    }
    return performances
  }

  /**
   *
   * @returns {Array} containing Current user's score and how many point left to reach maximum score
   */

  getScore() {
    const scoreData = [
      { name: 'score', value: this.mainData.todayScore ? this.mainData.todayScore : this.mainData.score },
      { name: 'empty', value: 1 - (this.mainData.todayScore ? this.mainData.todayScore : this.mainData.score) }
    ]
    return scoreData
  }
}

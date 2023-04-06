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
   * @returns {object} User's nutriment count
   */

  getKeyData() {
    return this.mainData.keyData
  }

  /**
   *
   * @returns {Array} User's daily calorie burnt and weight
   */

  getActivityData() {
    return this.activityData.sessions
  }

  /**
   *
   * @returns {Array} user's daily session length
   */

  getTrainingData() {
    return this.sessionData.sessions
  }

  /**
   *
   * @returns {object} kind of skill translated in french and user's score for each skill
   *  /!\ If kind ar missmatched data will be broken
   */

  getPerformanceData() {
    let performance = {
      kind: {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
      },
      data: this.performanceData.data
    }
    return performance
  }

  /**
   *
   * @returns {number} Current user's score
   */

  getScore() {
    let score = this.mainData.todayScore ? this.mainData.todayScore : this.mainData.score
    return score
  }
}

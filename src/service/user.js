export function formatedMainData(mainData) {
  const newMainData = {
    id: mainData.id,
    userInfos: {
      firstName: mainData.userInfos.firstName,
      lastName: mainData.userInfos.lastName,
      age: mainData.userInfos.age
    },
    todayScore: mainData.todayScore ? mainData.todayScore : mainData.score,
    keyData: {
      calorieCount: mainData.keyData.calorieCount,
      proteinCount: mainData.keyData.proteinCount,
      carbohydrateCount: mainData.keyData.carbohydrateCount,
      lipidCount: mainData.keyData.lipidCount
    }
  }
  return newMainData
}

export function formatedPerformanceData(performanceData) {
  const newPerformanceData = {
    userId: performanceData.userId,
    kind: {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    },
    data: [
      {
        value: performanceData.data[0].value,
        kind: 1
      },
      {
        value: performanceData.data[1].value,
        kind: 2
      },
      {
        value: performanceData.data[2].value,
        kind: 3
      },
      {
        value: performanceData.data[3].value,
        kind: 4
      },
      {
        value: performanceData.data[4].value,
        kind: 5
      },
      {
        value: performanceData.data[5].value,
        kind: 6
      }
    ]
  }
  return newPerformanceData
}

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

  getFirstName() {
    return this.mainData.userInfos.firstName
  }

  getKeyData() {
    return this.mainData.keyData
  }

  getActivityData() {
    return this.activityData.sessions
  }

  getTrainingData() {
    return this.sessionData.sessions
  }

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

  getScore() {
    let score = this.mainData.todayScore ? this.mainData.todayScore : this.mainData.score
    return score
  }
}

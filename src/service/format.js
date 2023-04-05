import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef'

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

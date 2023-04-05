import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mock-data'
import { formatedMainData, formatedPerformanceData } from './format'

export async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data.data
}

export async function getMainData(userId, useAPI) {
  if (useAPI === true) {
    const mainData = await fetchData(`http://localhost:3000/user/${userId}`)
    const newMainData = formatedMainData(mainData)
    return newMainData
  }
  const mainData = USER_MAIN_DATA.filter((element) => element.id === parseInt(userId))[0]
  return mainData
}

export async function getActivityData(userId, useAPI) {
  if (useAPI === true) {
    const activityData = await fetchData(`http://localhost:3000/user/${userId}/activity`)
    return activityData
  }
  const activityData = USER_ACTIVITY.filter((element) => element.userId === parseInt(userId))[0]
  return activityData
}

export async function getSessionData(userId, useAPI) {
  if (useAPI === true) {
    const sessionData = await fetchData(`http://localhost:3000/user/${userId}/average-sessions`)
    return sessionData
  }
  const sessionData = USER_AVERAGE_SESSIONS.filter((element) => element.userId === parseInt(userId))[0]
  return sessionData
}

export async function getPerformanceData(userId, useAPI) {
  if (useAPI === true) {
    const performanceData = await fetchData(`http://localhost:3000/user/${userId}/performance`)
    const newPerformanceData = formatedPerformanceData(performanceData)
    return newPerformanceData
  }
  const performanceData = USER_PERFORMANCE.filter((element) => element.userId === parseInt(userId))[0]
  return performanceData
}

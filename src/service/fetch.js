import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mock-data'

/**
 *
 * @param {string} url url to reach API
 * @returns data from API
 */

export async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data.data
}

/**
 *
 * @param {number} userId used in url to specify from which user we want data
 * @param {boolean} useAPI if true use API if not use mocked data
 * @returns mainData of user either via API or mocked data, if coming from API they are formated
 */

export async function getMainData(userId, useAPI) {
  if (useAPI === true) {
    const mainData = await fetchData(`http://localhost:3000/user/${userId}`)
    return mainData
  }
  const mainData = USER_MAIN_DATA.filter((element) => element.id === parseInt(userId))[0]
  return mainData
}

/**
 *
 * @param {number} userId used in url to specify from which user we want data
 * @param {boolean} useAPI if true use API if not use mocked data
 * @returns activityData of user either via API or mocked data, if coming from API they are formated
 */

export async function getActivityData(userId, useAPI) {
  if (useAPI === true) {
    const activityData = await fetchData(`http://localhost:3000/user/${userId}/activity`)
    return activityData
  }
  const activityData = USER_ACTIVITY.filter((element) => element.userId === parseInt(userId))[0]
  return activityData
}

/**
 *
 * @param {number} userId used in url to specify from which user we want data
 * @param {boolean} useAPI if true use API if not use mocked data
 * @returns sessionData of user either via API or mocked data, if coming from API they are formated
 */

export async function getSessionData(userId, useAPI) {
  if (useAPI === true) {
    const sessionData = await fetchData(`http://localhost:3000/user/${userId}/average-sessions`)
    return sessionData
  }
  const sessionData = USER_AVERAGE_SESSIONS.filter((element) => element.userId === parseInt(userId))[0]
  return sessionData
}

/**
 *
 * @param {number} userId used in url to specify from which user we want data
 * @param {boolean} useAPI if true use API if not use mocked data
 * @returns performanceData of user either via API or mocked data, if coming from API they are formated
 */

export async function getPerformanceData(userId, useAPI) {
  if (useAPI === true) {
    const performanceData = await fetchData(`http://localhost:3000/user/${userId}/performance`)
    return performanceData
  }
  const performanceData = USER_PERFORMANCE.filter((element) => element.userId === parseInt(userId))[0]
  return performanceData
}

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../styles/dashboard.css'
import KeyData from '../../components/KeyData'
import ActivityChart from '../../components/chart/ActivityChart'
import React from 'react'
import TrainingTimeChart from '../../components/chart/TrainingTimeChart'
import PerformanceChart from '../../components/chart/PerformanceChart'
import ScoreChart from '../../components/chart/ScoreChart'
import { getMainData, getActivityData, getSessionData, getPerformanceData } from '../../service/fetch'
import { User } from '../../service/user'

/**
 * 
 * @returns {React.Component} dashboard with user's data
 */

function Dashboard() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  // set useAPI to false if you want to use mocked data
  const useAPI = true

  useEffect(() => {
    // Retrieve data from API or mocked-data depending of useApi value
    async function fetchData() {
      const mainData = await getMainData(id, useAPI)
      const activityData = await getActivityData(id, useAPI)
      const sessionData = await getSessionData(id, useAPI)
      const performanceData = await getPerformanceData(id, useAPI)
      const user = new User(mainData, activityData, sessionData, performanceData)
      setData(user)
    }
    fetchData()
  }, [id, useAPI])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <section className="bonjour">
        <h1>
          Bonjour <strong>{data.getFirstName()}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="dashboardData">
        <article className="dashboardChart">
          <ActivityChart data={data.getActivityData()} />
          <TrainingTimeChart data={data.getTrainingData()} />
          <PerformanceChart data={data.getPerformanceData()} />
          <ScoreChart data={data.getScore()} />
        </article>
        <KeyData data={data.getKeyData()} />
      </section>
    </React.Fragment>
  )
}

export default Dashboard

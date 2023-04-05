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

function Dashboard() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  // set useAPI to false if you want to use mocked data
  const useAPI = true

  useEffect(() => {
    async function fetchData() {
      const mainData = await getMainData(id, useAPI)
      const activtyData = await getActivityData(id, useAPI)
      const sessionData = await getSessionData(id, useAPI)
      const performanceData = await getPerformanceData(id, useAPI)
      setData({ mainData, activtyData, sessionData, performanceData })
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
          Bonjour <strong>{data.mainData.userInfos.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="dashboardData">
        <article className="dashboardChart">
          <ActivityChart data={data.activtyData} />
          <TrainingTimeChart data={data.sessionData} />
          <PerformanceChart data={data.performanceData} />
          <ScoreChart data={data.mainData} />
        </article>
        <KeyData data={data.mainData} />
      </section>
    </React.Fragment>
  )
}

export default Dashboard

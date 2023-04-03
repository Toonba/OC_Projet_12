import { useParams } from 'react-router-dom'
import { USER_MAIN_DATA } from '../../data/mock-data'
import '../../styles/dashboard.css'
import KeyData from '../../components/KeyData'
import ActivityChart from '../../components/chart/ActivityChart'
import React, { useState, useEffect } from 'react'
import { FetchMainData } from '../../service/fetch'

function Dashboard() {
  const { id } = useParams()
  const [userData, setUserData] = useState({})
  let data = {}
  FetchMainData(`http://localhost:3000/user/${id}`).then((userInfo) => {
    data = userInfo
  })
  console.log(data)
  return (
    <React.Fragment>
      <section className="bonjour">
        <h1>{/* Bonjour <strong>{data.data.userInfos.firstName}</strong> */}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="dashboardData">
        <ActivityChart id={id} />
        <KeyData id={id} />
      </section>
    </React.Fragment>
  )
}

export default Dashboard

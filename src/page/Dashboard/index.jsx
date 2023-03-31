import { useParams } from 'react-router-dom'
import { USER_MAIN_DATA } from '../../data/mock-data'
import '../../styles/dashboard.css'
import KeyData from '../../components/KeyData'
import ActivityChart from '../../components/chart/ActivityChart'
import React from 'react'

function Dashboard() {
  const { id } = useParams()
  const userData = USER_MAIN_DATA.filter((element) => element.id === parseInt(id))

  return (
    <React.Fragment>
      <section className="bonjour">
        <h1>
          Bonjour <strong>{userData[0].userInfos.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className='dashboardData'>
        <ActivityChart id={id} />
        <KeyData id={id} />
      </section>
    </React.Fragment>
  )
}

export default Dashboard

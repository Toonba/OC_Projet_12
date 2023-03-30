import { useParams } from 'react-router-dom'
import { USER_MAIN_DATA } from '../../data/mock-data'
import '../../styles/dashboard.css'
import KeyData from '../../components/KeyData'
import ActivityChart from '../../components/chart/ActivityChart'

function Dashboard() {
  const { id } = useParams()
  const userData = USER_MAIN_DATA.filter((element) => element.id === parseInt(id))

  return (
    <section className="bonjour">
      <h1>
        Bonjour <strong>{userData[0].userInfos.firstName}</strong>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <ActivityChart id={id} />
      <KeyData id={id} />
    </section>
  )
}

export default Dashboard

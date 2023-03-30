import { Link } from 'react-router-dom'
import '../../styles/home.css'

function Home() {
  return (
    <div className="userChoice">
      <Link to="/user/12">
        <h2>User 12</h2>
      </Link>
      <Link to="/user/18">
        <h2>User 18</h2>
      </Link>
    </div>
  )
}

export default Home

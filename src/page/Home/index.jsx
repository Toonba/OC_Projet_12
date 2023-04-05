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
    // <section className="makeYourChoice">
    // <div className="useApi">
    //   <h2>Use API:</h2>
    //  <input type="checkbox" checked={useApi} onChange={handleCheckboxChange} />

    // </section>
  )
}

export default Home

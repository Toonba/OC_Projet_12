import yoga from '../../assets/yoga.png'
import natation from '../../assets/natation.png'
import velo from '../../assets/velo.png'
import halter from '../../assets/haltere.png'
import '../../styles/footer.css'

/**
 *
 * @returns {React.Component} with several logo and copyright text
 */

function Footer() {
  return (
    <footer>
      <div className="picture">
        <img src={yoga} alt="logo yoga" />
        <img src={natation} alt="logo natation" />
        <img src={velo} alt="logo velo" />
        <img src={halter} alt="logo halter" />
      </div>
      <p className="copyright">Copyright, SportSee 2020</p>
    </footer>
  )
}

export default Footer

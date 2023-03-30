import yoga from '../../assets/yoga.png'
import natation from '../../assets/natation.png'
import velo from '../../assets/velo.png'
import halter from '../../assets/haltere.png'
import '../../styles/footer.css'

function Footer() {
  return (
    <footer>
      <div className="picture">
        <img src={yoga} alt="logo yoga" />
        <img src={natation} alt="logo natation" />
        <img src={velo} alt="logo velo" />
        <img src={halter} alt="logo halter" />
      </div>
      <span className="copyright">Copyright, SportSee 2020</span>
    </footer>
  )
}

export default Footer

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

/**
 * 
 * @returns {React.Component} Header containing Logo and navbar 
 */

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo sportsee" />
        <Link to="/">Accueil</Link>
        <Link to="/">Profil</Link>
        <Link to="/">Réglage</Link>
        <Link to="/">Communauté</Link>
      </nav>
    </header>
  )
}

export default Header

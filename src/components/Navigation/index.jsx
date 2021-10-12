import { Component } from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="nav-main">
        <Link className="nav-main__link" to="/">
          ACCUEIL
        </Link>
        <Link className="nav-main__link" to="/a-propos">
          A PROPOS
        </Link>
      </nav>
    )
  }
}

export default Navigation

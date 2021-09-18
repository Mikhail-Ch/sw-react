import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'

export default class Header extends React.Component {
    render() {
        return(
          <header className="header">
              <div className="header__logo">
                  <Link to="/">SrarWars</Link>
              </div>
              <nav className="header__menu">
                  <Link to="/people/" className="header__menu-item">Person</Link>
                  <Link to="/planets/" className="header__menu-item">Planets</Link>
                  <Link to="/starships/" className="header__menu-item">Starships</Link>
              </nav>
          </header>
        )
    }
}

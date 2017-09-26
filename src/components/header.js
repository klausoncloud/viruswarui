import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './KoC3.svg';


class Header extends Component {

  render() {

    return(
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand logo" href="#">
          <img src={logo} width="50" height="50" alt="logo" />Klaus on Cloud
        </a>
        
        <form className="form-inline">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/Users">Usage/Rules</Link>
          <Link className="nav-item nav-link"  to="/Developers">Developers</Link>
        </form>

      </nav>
    );
  }
}

export default Header;

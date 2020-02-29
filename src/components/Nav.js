import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

import LinkedIn from "../img/favicon/logo192.png";
import { NavWrapper, MyNav } from './styles';

const Nav = () => {
  return (
    <NavWrapper>
    <MyNav>
      <div className="wrapper">
      <Link className="img-link" to="/"><img id="linked" src={LinkedIn} alt="LinkedIn"></img></Link>
        <form action="/action_page.php">
          <input type="text" required autoComplete="off" name="search" placeholder="Search"></input>
          <label htmlFor="search"><span id="content-search">Search</span></label>
        </form>
      </div>
      <ul>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li>My Network</li>
        <li>Jobs</li>
        <li>Messaging</li>
        <li>Notifications</li>
        <li>Me</li>
        <li>Work</li>
      </ul>
    </MyNav>
    </NavWrapper>
  )
}

export default Nav;
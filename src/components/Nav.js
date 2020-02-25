import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkedIn from "../img/favicon/logo192.png";

const navbg = "#283E4A";
const navcolor = "#C7D1D8";
const background = "#F5F5F5"

const Wrapper = styled.nav`
  background: ${navbg};
`;

const MyNav = styled.nav`
max-width: 1128px;
margin: 0 auto;
padding: 5px 0;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-between;

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    #linked {
      margin-right: 12px;
      margin-top: 2px;
      width: 35px;

      &:hover {
        cursor: pointer;
      }
    }
    
    form {
      width: 250px;
      height: 35px;
      position: relative;
      overflow: hidden;

      input {
        background: ${background};
        font-size: 1.4rem;
        height: 100%;
        width: 100%;
        border: 0;
        border-radius: 2px;
        padding-left: 8px;
        transition: all 0.3s ease;
      }
      
      label {
        pointer-events: none;
        width: 100%;
        transition: all 0.3s ease;
      }
      
      label #content-search {
        color: ${navcolor};
        font-size: 1.4rem;
        position: absolute;
        bottom: 8px;
        left: 8px;

        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
        }
      }

      input:focus + label, input:valid + label {
        display: none;
      }
    }
  }

  ul {
    display: flex;
    height: 42px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  
    li {
      margin-left: 30px;
      list-style: none;
      font-size: 1.2rem;
      color: ${navcolor};

      &:first-child {
        margin-left: 0;
      }
      
      .nav-link {
        font-size: 1.2rem;
        color: ${navcolor};
        text-decoration: none;
      }

      &:last-child {
        padding-left: 20px;
        
        &::before {
          content: "　";
          height: 52px;
          border-left: 1px solid ${navcolor};
          position: absolute;
          right: 40px;
          top: -5px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Nav;
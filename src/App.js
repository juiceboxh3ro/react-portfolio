import React from 'react';
import './App.css';
import styled from "styled-components";
import Nav from "./components/Nav"
import Cards from "./components/Cards";
import Language from "./components/Language";

const Header = styled.header`
  max-width: 1128px;
  margin: 0 auto;
  
  h1 {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
    position: relative;
    
    #span1 {
      font-size: 1.6rem;
      color: #0084BF;
      font-weight: 600;

      &:hover {
        cursor: pointer;
      }
    }
    #span2 {
      font-size: 1.2rem;
      color: #777;
      font-weight: 100;
      margin-left: 8px;

      &::after {
        content: "…";
        position: absolute;
        padding-left: 8px;
        bottom: 4px;
        font-size: 1.8rem;
        font-weight: 400;
        color: black;
        vertical-align: top;
      }
    }
  }
`;

const CardDeck = styled.section`
  max-width: 1128px;
  margin: 20px auto -20px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Footer = styled.footer`
  div {
    p {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

function App() {
  return (
    <div>
      <Nav />
      <Header>
        <h1><span id="span1">My LinkedIn Portfolio -</span> Created from scratch with React and coffee. <span id="span2">Ad</span></h1>
      </Header>
      <CardDeck id="card-deck">
        <Cards />
      </CardDeck>
      <Language />
      <Footer>
        <div>
          <p>
            Powered by React
          </p>
        </div>
      </Footer>
    </div>
  );
}

export default App;

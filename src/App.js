import React from 'react';
import './App.css';
import styled from "styled-components";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Language from "./components/Language";
import About from "./components/About";
import Experience from "./components/Experience";

const CardDeck = styled.section`
  max-width: 1128px;
  margin: 20px auto -20px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
      <Header />
      <CardDeck id="card-deck">
        <Cards />
        <Language />
        <About />
        <Experience />
      </CardDeck>
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

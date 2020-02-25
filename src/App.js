import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from "styled-components";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Language from "./components/Language";
import About from "./components/About";
import Experience from "./components/Experience";
import ContactCard from "./components/ContactCard";

const mobile = "(max-width: 415px)";
const tablet = "(max-width: 768px)";

const CardDeck = styled.section`
  max-width: 1128px;
  margin: 20px auto -20px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 800px auto;

  @media ${mobile} {
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
      <Route exact path="/">
        <Header />
        <CardDeck id="card-deck">
          <Cards />
          <Language />
          <About />
          <Experience />
        </CardDeck>
      </Route>
      <Route path="/contact">
        <ContactCard />
      </Route>
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

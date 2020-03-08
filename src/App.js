import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';

import { CardDeck } from "./components/styles";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Language from "./components/Language";
import Highlight from "./components/Highlight";
import About from "./components/About";
import Experience from "./components/Experience";
import FormikContakt from "./components/ContactCard";

import CardsJPN from "./components/japanese/CardsJPN";
import AboutJPN from "./components/japanese/AboutJPN";
import HighlightJPN from "./components/japanese/HighlightJPN";

function App() {
  return (
    <div>
      <Nav />

      <Route exact path="/">
        <Header />
        <CardDeck id="card-deck">
          <Cards />
          <Language />
          <Highlight />
          <About />
          <Experience />
        </CardDeck>
      </Route>

      <Route exact path="/jpn">
        <Header />
        <CardDeck id="card-deck">
          <CardsJPN />
          <Language />
          <HighlightJPN />
          <AboutJPN />
          <Experience />
        </CardDeck>
      </Route>

      <Route path="/contact">
        <FormikContakt />
      </Route>      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Language from "./components/Language";
import Highlight from "./components/Highlight";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  const [language, setLanguage] = useState("English")

  const handleLanguage = () => {
    if(language==="English") {
      setLanguage("Japanese")
    } else if (language==="Japanese") {
      setLanguage("English")
    }
  }

  return (
    <div>
      <Nav />

      <Route exact path="/">
        <Header language={language} />

        <div id="card-deck">
          <Cards language={language} />
          <Language handleLanguage={handleLanguage} />
          <Highlight language={language} />
          <About language={language} />
          <Experience language={language} />
        </div>
      </Route>
    </div>
  );
}

export default App;

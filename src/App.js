import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Carnation from "./Carnation";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
        <Route path="/:parent/:child" component={Carnation} />
      </Router>
    </>
  );
}

export default App;

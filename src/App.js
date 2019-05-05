import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Carnation from "./Carnation";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:parent/:child" component={Carnation} />
            <Route component={Home} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;

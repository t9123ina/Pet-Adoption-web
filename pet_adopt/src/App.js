import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroductionPage from "./containers/introduction";
import AdoptionPage from "./containers/pets";
import ContactPage from "./containers/contact";

import Header from "./components/header/header";
function App() {
  return (
    <Fragment className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={IntroductionPage} />
          <Route exact path="/adopt" component={AdoptionPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

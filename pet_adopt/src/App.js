import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroductionPage from "./containers/introduction";
import AdoptionPage from "./containers/pets";
import Header from "./components/header/header";
function App() {
  return (
    <Fragment className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={IntroductionPage} />
          <Route exact path="/adopt" component={AdoptionPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

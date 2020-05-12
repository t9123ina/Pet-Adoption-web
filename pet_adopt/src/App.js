import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "./views/introduction";
import Adoption from "./views/adoption";

import Header from "./components/header/header";
function App() {
  return (
    <Fragment className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route exact path="/adopt" component={Adoption} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

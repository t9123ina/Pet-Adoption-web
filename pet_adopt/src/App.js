import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "./views/introduction";
import Header from "./components/header/header";
function App() {
  return (
    <Fragment className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Introduction} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

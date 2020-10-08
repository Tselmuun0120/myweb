import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./component/homework1/App.scss";
import "./component/homework2/App2.scss";
import "./component/homework3/App3.scss";
import App from "./component/homework1/App.js";
import App2 from "./component/homework2/App2.js";
import App3 from "./component/homework3/App3.js";

function Main () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Homework1</Link>
          </li>
          <li>
            <Link to="/app2">Homework2</Link>
          </li>
          <li>
            <Link to="/app3">Homework3</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/app2">
            <App2 />
          </Route>
          <Route path="/app3">
            <App3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Main;

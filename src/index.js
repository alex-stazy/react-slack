import React from "react";
import ReactDOM from "react-dom";

// import { Provider } from "react-redux";
// import store from "./store/store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthController from "./components/auth/AuthController";
import ThreadController from "./components/threads/ThreadController";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ThreadController} />
      <Route path="/auth" component={AuthController} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

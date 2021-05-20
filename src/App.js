import React from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import history from "./history";

// COMPONENTS
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/upload" exact>
        <Upload />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <>
      <Router history={history}>
        <Header />
        {routes}
      </Router>
    </>
  );
}

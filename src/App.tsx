import React from "react";
import SiteLayout from "./layout/site-layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.module.scss"
const App: React.FC = () => {
  console.log('render app');

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={SiteLayout}></Route>
        </Switch>
    </Router>
  );
}

export default App;
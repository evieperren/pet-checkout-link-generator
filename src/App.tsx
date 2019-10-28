import React from "react";
import styles from "./App.module.scss";
import LinkGenerator from "./pages/link-generator/link-generator"

import VetPractice from "./pages/vet-practice/vet-practice";
import Title from "./component/title/title";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./assets/images/animal-healthcare.png";

const App: React.FC = () => {
  console.log('render app');

  return (
    <Router>
      <div className={styles.header_container}>
        <img src={logo} alt="animal healthcare logo" className={styles.logo}/>
      </div>
      <Title></Title>
      <Switch>
        <Route exact path="/" component={LinkGenerator}></Route>
        <Route path="/vets-practice" component={VetPractice}></Route>
      </Switch>
    </Router>
  );
}

export default App;
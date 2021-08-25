import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"; 
import Header from "./components/Header";
import EmployeeFeed from "./components/EmployeeFeed";
import MatchBlock from "./components/RecentMatch";
import HomePage from "./components/HomePage";
import JoinEmployerPage from "./components/JoinEmployerPage";
import Employer from "./components/Employer";
import "./style/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/joinEmployer' component={JoinEmployerPage}/>
        <Route path='/employer/:id' component={Employer}/>
      </Switch>
    </Router>
  );
}

export default App;

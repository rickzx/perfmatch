import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Header from "./Header";
import EmployeeFeed from "./EmployeeFeed";
import MatchBlock from "./RecentMatch";

function HomePage() {
  const [employeeFeed, setEmployeeFeed] = useState([
    {
      id: 1,
      name: "John",
      age: "33",
      picurl: "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch/images/profile-john.png",
      descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      name: "Mary",
      age: "35",
      picurl: "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch/images/profile-jane.png",
      descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 3,
      name: "Jack",
      age: "53",
      picurl: "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch/images/profile-jack.png",
      descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ]);

  const refreshFeed = () => {
    console.log(employeeFeed);
    const newId = employeeFeed[employeeFeed.length - 1].id + 1;
    const newEmployee = {
      id: newId,
      name: "Unknown" + newId,
      age: Math.floor(Math.random() * 60) + 30,
    };

    setEmployeeFeed([...employeeFeed, newEmployee]);
  };

  const history = useHistory();

  return (
    <div className="App">
      <Header />
      {/* <EmployeeFeed employeeFeed={employeeFeed} /> */}
      {/* Employer 还是 Employee? */}
      <div className="Find">
        <button onClick={() => history.push("/joinEmployer")}>join</button>
        <div className="findEmployer">
          <h2>I'm an employee</h2>
          <p className="description">
            Seeking for a suitable family to work for? We strive to help you
            find you the most suitable employer.
          </p>
          <a className="findButton">FIND EMPLOYER NOW</a>
        </div>
        <div className="findEmployee">
          <h2>I'm an employer</h2>
          <p className="description">
            Thinking of hiring a FDW? We strive to help you find you the most
            suitable helper for your home.
          </p>
          <a className="findButton">FIND EMPLOYEE NOW</a>
        </div>
      </div>
      {/* Employer Helper Feed */}
      <div className="Feed">
        <h2 className="bar">Recent matches</h2>
        <div className="feedTab">
          <a className="active">
            <h2>Employers</h2>
          </a>
          <a>
            <h2>Helpers</h2>
          </a>
        </div>
        <MatchBlock employeeFeed={employeeFeed}/>
        <a className="logReg">Get personalised list</a>
      </div>
      {/* 咱能干啥？ */}
    </div>
  );
}

export default HomePage;
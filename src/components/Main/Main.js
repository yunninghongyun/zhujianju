import React, { Component } from "react";
import { Route } from "react-router-dom";
import Project from "../Project/Project";
import Jicha from "../Jicha/Jicha";
import Message from "../Message/Message";
import Baobiao from "../Baobiao/Baobiao";
import Person from "../Person/Person";
import Exit from "../Exit/Exit";
import Login from "../Login/Login";
import Section from "../Section/Section";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <Route exact path="/" component={Login} />
        <Route path="/section" component={Section} />
        <Route path="/section/project" component={Project} />
        <Route path="/section/jicha" component={Jicha} />
        <Route path="/section/message" component={Message} />
        <Route path="/section/baobiao" component={Baobiao} />
        <Route path="/section/person" component={Person} />
        <Route path="/section/exit" component={Exit} />
      </div>
    );
  }
}

export default Main;

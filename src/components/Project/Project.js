import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import NewProject from "./NewProject/NewProject";
import Draft from "./Draft/Draft";
import "./Project.css";
class Project extends Component {
  state = {};
  render() {
    return (
      <div className="project">
        <div className="project-header">
          <div className="project-top">
            <span>当前用户: </span>
            <span> 小蚂蚁</span>
          </div>
          <div className="biaoti">
            <span className="xiangmu">工程项目</span>
            <span className="iconfont icon-xia"></span>
          </div>
          <div className="project-nav">
            <NavLink activeClassName="active" to="/section/project/newProject">
              <div>
                <span className="iconfont icon-tubiaozhizuo-"></span>
                <span>新建项目</span>
              </div>
              <span className="iconfont  icon-xia"></span>
            </NavLink>
            <NavLink activeClassName="active" to="/section/project/draft">
              <div>
                <span className="iconfont icon-tubiaozhizuo-"></span>
                <span>草稿</span>
              </div>
              <span className="iconfont  icon-xia"></span>
            </NavLink>
          </div>
        </div>

        <div className="project-main">
          <Route exact path="/section" component={NewProject} />
          <Route exact path="/section/project" component={NewProject} />
          <Route path="/section/project/newProject" component={NewProject} />
          <Route path="/section/project/draft" component={Draft} />
        </div>
      </div>
    );
  }
}

export default Project;

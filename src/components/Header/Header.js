import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="top">
          <ul>
            <NavLink activeClassName="active" to="/section/project">
              <div>
                <span className="iconfont icon-biaoge"></span> <li>工程</li>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/section/jicha">
              <div>
                <span className="iconfont icon-jicha"></span> <li>稽查</li>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/section/message">
              <div>
                <span className="iconfont icon-xiaoxi"></span> <li>消息</li>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/section/baobiao">
              <div>
                <span className="iconfont icon-baobiaofenxi"></span>{" "}
                <li>报表</li>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/section/person">
              <div>
                <span className="iconfont icon-geren"></span> <li>个人</li>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/section/exit">
              <div>
                <span className="iconfont icon-tuichu"></span> <li>退出</li>
              </div>
            </NavLink>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

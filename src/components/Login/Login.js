import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login">
        <div className="dl">
          <h4>建筑稽查</h4>
          <div className="zh">
            <span>账号:</span> <input type="text" placeholder="请输入账号" />
          </div>
          <div className="mima">
            <span>密码:</span>
            <input type="password" placeholder="请输入密码" />
          </div>
          <div className="btn">
            <Link to="/section/project">
              <button>登录</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

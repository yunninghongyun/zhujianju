import React, { Component } from "react";
import "./Message.css";
class Message extends Component {
  state = {};
  render() {
    return (
      <div className="message">
        <div className="message-top">
          <h2>建设行政执法调查通知书</h2>
          <div className="text2">
            <span>编号：</span>
          </div>
        </div>
        <div className="message-inner">
          <div className="int">
            <div className="text3">
              <input type="text" />:
            </div>
          </div>
          <div className="text">
            <p>
              根据 <input type="text" />
              ,依据 <input type="text" />
              等有关建设管理法规，我单位（办）决定于
              <input type="text" /> 年<input type="text" /> 月
              <input type="text" /> 日<input type="text" /> 时在
              <input type="text" /> ，对你（单位 ）<input type="text" />
              的有关建设活动进行调查。届时请你(单位)主管领导（如不是法定代表人请持单位及法定代表人的委托书）携带如下资料备查：
            </p>
            <div>
              <span>1、</span>
              <input type="text" />
            </div>
            <div>
              <span>2、</span>
              <input type="text" />
            </div>
            <div>
              <span>3、</span>
              <input type="text" />
            </div>
          </div>
          <div className="text1">
            <p>行政执法机关印章或行政执法机关行政处罚专用章</p>
            <div className="text4">
              <span>年</span>
              <span>月</span>
              <span>日</span>
            </div>
          </div>
          <div className="text5">
            <span>收件人签字：</span>
            <span>联系电话：</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;

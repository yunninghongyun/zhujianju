import React, { Component } from "react";
import "./Draft.css";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="draft">
        <h2>建设行政违法案件立案审批表</h2>
        <div className="biao">
          <table>
            <tbody>
              <tr>
                <td rowSpan="4" className="qq">
                  当 事 人
                </td>
                <td rowSpan="2">单位</td>
                <td>名称</td>
                <td colSpan="3">
                  <input type="text" />
                </td>
                <td>地址</td>
                <td colSpan="3">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">法定代表人</td>
                <td colSpan="3">
                  <input type="text" />
                </td>
                <td colSpan="1">电话</td>
                <td colSpan="2">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td rowSpan="2">公民</td>
                <td colSpan="1">姓名</td>
                <td colSpan="2">
                  <input />
                </td>
                <td colSpan="1">性别</td>
                <td colSpan="1">
                  <input type="text" />
                </td>
                <td colSpan="1">电话</td>
                <td colSpan="2">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td colSpan="1">住址</td>
                <td colSpan="4">
                  <input type="text" />
                </td>
                <td colSpan="1">身份证号码</td>
                <td colSpan="2">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td colSpan="3">案件来源</td>
                <td colSpan="8">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td style={{ width: "5%" }}>案情摘要</td>
                <td colSpan="8"></td>
              </tr>
              <tr>
                <td>执法人员意见</td>
                <td colSpan="8" className="title">
                  <div className="title-bottom">
                    <div>
                      <span> 执法人员:</span>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="time">
                      <span>年</span>
                      <span>月</span>
                      <span>日</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>执法机构意见</td>
                <td colSpan="8" className="title">
                  <div className="title-bottom">
                    <span> 负责人：</span>
                    <div className="time">
                      <span>年</span>
                      <span>月</span>
                      <span>日</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>法制机构意见</td>
                <td colSpan="8" className="title">
                  <div className="title-bottom">
                    <span> 负责人：</span>
                    <div className="time">
                      <span>年</span>
                      <span>月</span>
                      <span>日</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>行政机关审批意见</td>
                <td
                  colSpan="8"
                  className="title"
                  style={{ paddingTop: "80px" }}
                >
                  <div className="title-bottom">
                    <span> 负责人：</span>
                    <div className="time">
                      <span>年</span>
                      <span>月</span>
                      <span>日</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default About;

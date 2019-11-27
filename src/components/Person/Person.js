import React, { Component } from "react";
import "./Person.css";
class Person extends Component {
  state = {};
  render() {
    return (
      <div className="person">
        <h2>建设行政执法现场检查笔录</h2>
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
              <td colSpan="1" style={{ textAlign: "center" }}>
                电话
              </td>
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
              <td colSpan="1" style={{ textAlign: "center" }}>
                电话
              </td>
              <td colSpan="2">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td colSpan="1">住址</td>
              <td colSpan="4">
                <input type="text" />
              </td>
              <td colSpan="1" style={{ width: "50px", textAlign: "center" }}>
                身份证号 码
              </td>
              <td colSpan="2">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td style={{ width: "50px", textAlign: "center" }}>检查机构</td>
              <td colSpan="6"></td>
              <td style={{ width: "40px", textAlign: "center" }}>检查时间</td>
              <td colSpan="2"></td>
            </tr>
            <td colSpan="9">
              <textarea
                className="textall"
                placeholder="现场检查情况记录:"
                rows="6"
              ></textarea>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Person;

// <table>
//   <tbody>
//     <tr>
//       <td rowSpan="4" className="qq">
//         当事人
//       </td>
//       <td rowSpan="2">单位</td>
//       <td>名称</td>
//       <td colSpan="3">
//         <input type="text" />
//       </td>
//       <td>地址</td>
//       <td colSpan="3">
//         <input type="text" />
//       </td>
//     </tr>
//     <tr>
//       <td colSpan="2">法定代表人</td>
//       <td colSpan="3">
//         <input type="text" />
//       </td>
//       <td colSpan="1">电话</td>
//       <td colSpan="2">
//         <input type="text" />
//       </td>
//     </tr>
//     <tr>
//       <td rowSpan="2">公民</td>
//       <td colSpan="1">姓名</td>
//       <td colSpan="2">
//         <input />
//       </td>
//       <td colSpan="1">性别</td>
//       <td colSpan="1">
//         <input type="text" />
//       </td>
//       <td>电话</td>
//       <td colSpan="2">
//         <input type="text" />
//       </td>
//     </tr>
//     <tr>
//       <td colSpan="1">住址</td>
//       <td colSpan="4">
//         <input type="text" />
//       </td>
//       <td colSpan="1">身份证号码</td>
//       <td colSpan="2">
//         <input type="text" />
//       </td>
//     </tr>
//     <tr>
//       <td colSpan="2">案件来源</td>
//       <td colSpan="8">
//         <input type="text" />
//       </td>
//     </tr>
//     <tr>

//     </tr>
//   </tbody>
// </table>

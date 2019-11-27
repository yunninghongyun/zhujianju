import React, { Component } from "react";
import "./NewProject.css";
import { Radio, Select } from "antd";
class NewProject extends Component {
  state = {
    value: 1,
    children: []
  };
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  render() {
    return (
      <div className="newproject">
        <div className="newproject-top">
          <span>home/</span>
          <span>工程项目 </span>
        </div>
        <div className="newproject-main">
          <div className="newproject-main-top">
            <span>新建工程</span>
            <div>
              <button>保存为草稿</button>
              <button>正式发布</button>
            </div>
          </div>
          <div className="newproject-main-section">
            <table className="table1">
              <tbody>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span style={{ color: "red" }}>*</span>
                    <span>工程项目:</span>
                  </td>
                  <td colSpan="2">
                    <span>
                      新开工程
                      <Radio.Group
                        onChange={this.onChange}
                        value={this.state.value}
                      >
                        <Radio value={1}></Radio>
                      </Radio.Group>
                    </span>
                    <span>
                      市政工程
                      <Radio.Group
                        onChange={this.onChange}
                        value={this.state.value}
                      >
                        <Radio value={2}></Radio>
                      </Radio.Group>
                    </span>
                  </td>
                  <td></td>
                  <td colSpan="3"></td>
                  <td style={{ textAlign: "right" }}>
                    <span style={{ color: "red" }}>*</span>
                    <span>区域:</span>
                  </td>
                  <td colSpan="2">
                    <Select
                      size="small"
                      defaultValue="请选择区域"
                      style={{ width: 150 }}
                    ></Select>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span style={{ color: "red" }}>*</span>
                    <span>项目名称:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span style={{ color: "red" }}>*</span>
                    <span>工程总类:</span>
                  </td>
                  <td colSpan="3">
                    <Select
                      size="small"
                      defaultValue="选择工程总类"
                      style={{ width: 150 }}
                    ></Select>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>建筑面积:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                    <span>㎡/m</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span>工程地址:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>勘察单位:</span>
                  </td>
                  <td colSpan="3">
                    <input type="text" />
                    <span style={{ color: "#ffba52" }}>!</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>工程造价:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                    <span>万元</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span>设计单位:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                    <span style={{ color: "#ffba52" }}>!</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>招标代理 :</span>
                  </td>
                  <td colSpan="3">
                    <input type="text" />
                    <span style={{ color: "#ffba52" }}>!</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>开工时间:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span>建设单位:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                    <span style={{ color: "#ffba52" }}>!</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>施工单位 :</span>
                  </td>
                  <td colSpan="3">
                    <input type="text" />
                    <span style={{ color: "#ffba52" }}>!</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>竣工日期:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span>监理单位:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                    <span style={{ color: "#ffba52" }}>!</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>实际开工日期 :</span>
                  </td>
                  <td colSpan="3">
                    <input type="text" />
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span>实际竣工日期:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <span>合同日期:</span>
                  </td>
                  <td colSpan="2">
                    <input type="text" />
                  </td>
                  <td></td>
                  <td colSpan="3"></td>
                  <td></td>
                  <td colSpan="2"></td>
                </tr>
              </tbody>
            </table>
            <table className="table2">
              <thead>
                <tr className="title">
                  <td style={{ fontWeight: "bold", width: "13%" }}>部门</td>
                  <td style={{ fontWeight: "bold", width: "25%" }}>文号</td>
                  <td style={{ fontWeight: "bold", width: "1%" }}>日期</td>
                  <td style={{ fontWeight: "bold", width: "52%" }}>附件</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>建设工程计划批文:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>建设工程规划许可证:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>施工图审查批准书:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>工程监理备案表:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>建设工程质量监督书:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>建设工程施工许可证:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>建设工程竣工验收:</td>
                  <td>
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span>上传</span>
                  </td>
                </tr>
              </thead>
            </table>
            <table className="table3">
              <tbody>
                <tr className="title1">
                  <td colSpan="6" style={{ width: "10%", fontWeight: "bold" }}>
                    建设单位
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" style={{ textAlign: "right" }}>
                    甲方负责人:
                  </td>
                  <td colSpan="1">
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td colSpan="1" style={{ textAlign: "right" }}>
                    甲方负责人联系电话:
                  </td>
                  <td colSpan="1">
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" style={{ textAlign: "right" }}>
                    现场负责人:
                  </td>
                  <td colSpan="1">
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                  <td colSpan="1" style={{ textAlign: "right" }}>
                    现场负责人联系电话:
                  </td>
                  <td colSpan="1">
                    <input style={{ width: "90%" }} type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProject;

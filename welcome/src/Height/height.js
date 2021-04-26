import React, { Component } from "react";
import { Radio, Button, Space } from "antd";
// import styles from "./height.module.scss";

class Height extends Component {
  render() {
    return (
      <div className="col-sm-12 mt-4">
        <p>Please select your height range:</p>
        <div className="d-flex justify-content-center">
          <Radio.Group
            onChange={this.props.onHeightChange}
            value={this.props.height}
          >
            <Space direction="vertical">
              <Radio value="3ft - 3ft 5in">3ft - 3ft 5in</Radio>
              <Radio value="3ft 6in - 4ft">3ft 6in - 4ft</Radio>
              <Radio value="4ft - 4ft 5in">4ft - 4ft 5in</Radio>
              <Radio value="4ft 6in - 5ft">4ft 6in - 5ft</Radio>
              <Radio value="5ft - 7ft">5ft - 7ft</Radio>
            </Space>
          </Radio.Group>
        </div>
        <br />
        <Button type="primary" danger onClick={this.props.onBackToGender}>
          Back
        </Button>
        <Button type="primary" onClick={this.props.onNextToIntro}>
          Next
        </Button>
      </div>
    );
  }
}

export default Height;

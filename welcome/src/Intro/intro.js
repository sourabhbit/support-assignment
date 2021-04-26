import React, { Component } from "react";
import { Button, Tag } from "antd";
import styles from "./intro.module.scss";

class Intro extends Component {
  render() {
    return (
      <div>
        <Tag color="blue" className={styles.tag}>
          Holla, You are {this.props.gender} with approx {this.props.height}{" "}
          height
        </Tag>

        <Button
          type="primary"
          className="mt-4"
          danger
          onClick={this.props.onBackToHeight}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default Intro;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faFemale,
  faTransgenderAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Radio, Button } from "antd";
import styles from "./gender.module.scss";

class Gender extends Component {
  render() {
    return (
      <div className="col-sm-12 mt-4">
        <p>Please select your gender:</p>
        <div className="d-flex justify-content-center">
          <Radio.Group
            onChange={this.props.onGenderChange}
            value={this.props.gender}
          >
            <Radio value="Male">
              <FontAwesomeIcon className={styles.font} icon={faMale} />
            </Radio>
            <Radio value="Female">
              <FontAwesomeIcon className={styles.font} icon={faFemale} />
            </Radio>
            <Radio value="Trans">
              <FontAwesomeIcon
                className={styles.font}
                icon={faTransgenderAlt}
              />
            </Radio>
          </Radio.Group>
        </div>
        <br />
        <Button type="primary" onClick={this.props.onNextToHeight}>
          Next
        </Button>
      </div>
    );
  }
}

export default Gender;

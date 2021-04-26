import React, { Component } from "react";
import Gender from "./Gender/gender";
import Height from "./Height/height";
import Intro from "./Intro/intro";
import { SCREENS } from "./constants";
import { Layout, Card } from "antd";
import "./App.css";

const { Header, Content, Footer } = Layout;
class App extends Component {
  state = {
    activeScreen: SCREENS.GENDER,
    gender: "",
    height: "",
  };

  onNextToHeight = () => {
    this.setState({
      activeScreen: SCREENS.HEIGHT,
    });
  };

  onNextToIntro = () => {
    this.setState({
      activeScreen: SCREENS.INTRO,
    });
  };

  onGenderChange = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  onHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };

  onBackToHeight = () => {
    this.setState({
      activeScreen: SCREENS.HEIGHT,
    });
  };

  onBackToGender = () => {
    this.setState({
      activeScreen: SCREENS.GENDER,
    });
  };

  render() {
    return (
      <div className="site-card-border-less-wrapper m-auto">
        <Header
          style={{ color: "white", fontSize: "18px", fontFamily: "sans-serif" }}
        >
          Welcome to Gender and Height
        </Header>
        <Card>
          <Content>
            {this.state.activeScreen === SCREENS.GENDER && (
              <Gender
                onNextToHeight={this.onNextToHeight}
                onGenderChange={this.onGenderChange}
                gender={this.state.gender}
              />
            )}
            {this.state.activeScreen === SCREENS.HEIGHT && (
              <Height
                onNextToIntro={this.onNextToIntro}
                onHeightChange={this.onHeightChange}
                onBackToGender={this.onBackToGender}
                height={this.state.height}
              />
            )}
            {this.state.activeScreen === SCREENS.INTRO && (
              <Intro
                height={this.state.height}
                gender={this.state.gender}
                onBackToHeight={this.onBackToHeight}
              />
            )}
          </Content>
        </Card>
        <Footer />
      </div>
    );
  }
}

export default App;

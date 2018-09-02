import React, { Component } from "react";
import Lottie from "react-lottie";
import { connect } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import * as animationData from "../../animations/create_food_menu/data.json";

import FoodMenuTab from "../../components/food_menu/FoodMenuTab";
import FoodMenuElementsList from "../../components/food_menu/FoodMenuElementsList";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class FoodMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewMenuButtonClicked: false,
      elementsListType: "menus"
    };
  }

  changeActiveListType = type => {
    this.setState({
      elementsListType: type
    });
  };

  foodMenu = null;

  render() {
    if (this.foodMenu || this.state.isNewMenuButtonClicked) {
      return (
        <div>
          <div
            style={{
              paddingTop: "50px"
            }}
          >
            <FoodMenuTab
              setActive={this.changeActiveListType}
              active={this.state.elementsListType}
            />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "50px",
              left: "0px",
              width: "100%"
            }}
          >
            <FoodMenuElementsList listType={this.state.elementsListType} />
          </div>
          <Navbar active={5} />
        </div>
      );
    } else {
      return (
        <div>
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%"
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#7a7a7a",
                paddingTop: "70px"
              }}
            >
              <p>Food Menu not found</p>
            </div>
            <Lottie options={defaultOptions} height={"300px"} width={"300px"} />
            <div
              style={{ textAlign: "center", color: "#7a7a7a", padding: "5px" }}
            >
              <p>
                <a
                  className="hovarable"
                  style={{ color: "#e8232d" }}
                  onClick={() => {
                    this.setState({
                      isNewMenuButtonClicked: true
                    });
                  }}
                >
                  Click Here
                </a>
                <br />
                To create a Food Menu
              </p>
            </div>
          </div>
          <Navbar active={5} />
        </div>
      );
    }
  }
}

export default connect(
  null,
  null
)(FoodMenuScreen);
import React, { Component } from "react";
import Lottie from "react-lottie";

import Navbar from "../../components/navbar/Navbar";

import * as animationData from "../../animations/food_orders/data.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class CustomFoodScreen extends Component {
  render() {
    let customFoodData = null;

    if (customFoodData) {
      return (
        <div>
          <div
            className="col-12 col-md-10 col-lg-8 offset-lg-2 offset-md-1"
            style={{ paddingTop: "60px" }}
          />
          <Navbar active={1} />
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
              <p>Orders not found</p>
            </div>
            <Lottie options={defaultOptions} height={"300px"} width={"300px"} />
            <div
              style={{ textAlign: "center", color: "#7a7a7a", padding: "5px" }}
            >
              <p>
                <a style={{ color: "#e8232d" }}>Click Here</a>
                <br />
                To create a Food order Form
              </p>
            </div>
          </div>
          <Navbar active={1} />
        </div>
      );
    }
  }
}

export default CustomFoodScreen;

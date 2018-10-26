import React, { Component } from "react";

export class FoodMenuEditorTemplate extends Component {
  render() {
    return (
      <div
        className="col-12 offset-md-1 offset-lg-2 col-md-10 col-lg-8"
        style={{
          boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

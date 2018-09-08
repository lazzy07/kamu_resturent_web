import React, { Component } from "react";

export class FoodMenuEditorTemplate extends Component {
  render() {
    return (
      <div
        className="col-12 offset-sm-1 offset-md-2 col-sm-10 col-md-8"
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

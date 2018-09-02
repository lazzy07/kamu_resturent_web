import React, { Component } from "react";
import { FoodMenuTabElement } from "./FoodMenuTabElement";

class FoodMenuTab extends Component {
  render() {
    return (
      <div
        style={{
          height: "50px",
          backgroundColor: "#fff",
          boxShadow:
            "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1) inset",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center"
        }}
      >
        <FoodMenuTabElement icon="fa fa-book" label="Menus" />
        <FoodMenuTabElement icon="fa fa-coffee" label="Items" />
        <FoodMenuTabElement icon="fa fa-sitemap" label="Categories" />
      </div>
    );
  }
}

export default FoodMenuTab;

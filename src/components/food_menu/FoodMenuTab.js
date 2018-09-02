import React, { Component } from "react";
import { FoodMenuTabElement } from "./FoodMenuTabElement";

class FoodMenuTab extends Component {
  render() {
    return (
      <div
        style={{ position: "fixed", bottom: "0px", left: "0px", width: "100%" }}
      >
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
          <div onClick={() => this.props.setActive("menus")}>
            <FoodMenuTabElement
              active={this.props.active}
              myType="menus"
              icon="fa fa-book"
              label="Menus"
            />
          </div>
          <div onClick={() => this.props.setActive("items")}>
            <FoodMenuTabElement
              active={this.props.active}
              myType="items"
              icon="fa fa-coffee"
              label="Items"
            />
          </div>
          <div onClick={() => this.props.setActive("categories")}>
            <FoodMenuTabElement
              active={this.props.active}
              myType="categories"
              icon="fa fa-sitemap"
              label="Categories"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodMenuTab;

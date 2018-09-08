import React, { Component } from "react";
import { FoodMenuMenusList } from "./FoodMenuMenusList";
import { FoodMenuItemsList } from "./FoodMenuItemsList";
import { FoodMenuCategoriesList } from "./FoodMenuCategoriesList";

class FoodMenuElementsList extends Component {
  render() {
    if (this.props.listType === "menus") {
      return (
        <div>
          <FoodMenuMenusList setEditor={this.props.setEditor} />
        </div>
      );
    } else if (this.props.listType === "items") {
      return (
        <div>
          <FoodMenuItemsList setEditor={this.props.setEditor} />
        </div>
      );
    } else {
      return (
        <div>
          <FoodMenuCategoriesList setEditor={this.props.setEditor} />
        </div>
      );
    }
  }
}

export default FoodMenuElementsList;

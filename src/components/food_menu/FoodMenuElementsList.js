import React, { Component } from "react";
import { FoodMenuMenusList } from "./FoodMenuMenusList";
import { FoodMenuItemsList } from "./FoodMenuItemsList";
import { FoodMenuCategoriesList } from "./FoodMenuCategoriesList";

class FoodMenuElementsList extends Component {
  render() {
    if (this.props.listType === "menus") {
      return (
        <div>
          <FoodMenuMenusList />
        </div>
      );
    } else if (this.props.listType === "items") {
      return (
        <div>
          <FoodMenuItemsList />
        </div>
      );
    } else {
      return (
        <div>
          <FoodMenuCategoriesList />
        </div>
      );
    }
  }
}

export default FoodMenuElementsList;

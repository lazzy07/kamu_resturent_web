import React, { Component } from "react";
import FoodMenuItemEditor from "./FoodMenuItemEditor";
import FoodMenuCategoriesEditor from "./FoodMenuCategoriesEditor";
import FoodMenuMenuEditor from "./FoodMenuMenuEditor";

const data = {
  name: "My_Item_01",
  description: "no description",
  price: 2000
};

class FoodMenuEditorRender extends Component {
  render() {
    if (this.props.type === "menu") {
      return (
        <div>
          <FoodMenuMenuEditor />
        </div>
      );
    } else if (this.props.type === "category") {
      return (
        <div>
          <FoodMenuCategoriesEditor />
        </div>
      );
    } else {
      return (
        <div>
          <FoodMenuItemEditor data={data} />
        </div>
      );
    }
  }
}

export default FoodMenuEditorRender;

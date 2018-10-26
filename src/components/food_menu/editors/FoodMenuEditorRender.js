import React, { Component } from "react";
import FoodMenuItemEditor from "./FoodMenuItemEditor";
import FoodMenuCategoriesEditor from "./FoodMenuCategoriesEditor";
import FoodMenuMenuEditor from "./FoodMenuMenuEditor";

const data = {
  name: "My_Item_01",
  description: "no description",
  price: 2000,
  image: "lol",
  rating: {
    rating: 4.5,
    total: 15,
    stars: {
      stars5: 5,
      stars4: 4,
      stars3: 3,
      stars2: 2,
      stars1: 1
    }
  }
};

const dataCategory = {
  name: "My_Category_01",
  prices: [1000, 1500, 1200, 3000],
  content: []
};

const dataMenu = {
  name: "my_menu_01"
};

class FoodMenuEditorRender extends Component {
  divStyles = {
    marginBottom: "250px"
  };
  render() {
    if (this.props.type === "menu") {
      return (
        <div style={this.divStyles}>
          <FoodMenuMenuEditor data={dataMenu} />
        </div>
      );
    } else if (this.props.type === "category") {
      return (
        <div style={this.divStyles}>
          <FoodMenuCategoriesEditor data={dataCategory} />
        </div>
      );
    } else {
      return (
        <div style={this.divStyles}>
          <FoodMenuItemEditor data={data} />
        </div>
      );
    }
  }
}

export default FoodMenuEditorRender;

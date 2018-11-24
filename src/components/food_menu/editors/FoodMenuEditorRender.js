import React, { Component } from "react";
import FoodMenuItemEditor from "./FoodMenuItemEditor";
import FoodMenuCategoriesEditor from "./FoodMenuCategoriesEditor";
import FoodMenuMenuEditor from "./FoodMenuMenuEditor";
import { connect } from "react-redux";

import {
  loadFoodCategories,
  loadFoodItems,
  loadFoodMenus
} from "../../../redux/actions/FoodMenuActions";

const data = {
  name: "My_Item_01",
  description: "no description",
  price: 2000,
  image: null,
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
  componentWillMount = () => {
    this.props.loadFoodMenus();
    this.props.loadFoodCategories();
    this.props.loadFoodItems();
  };

  //Styles for the divs used in render
  divStyles = {
    marginBottom: "250px"
  };

  render() {
    if (this.props.type === "menu") {
      return (
        <div style={this.divStyles}>
          <FoodMenuMenuEditor data={this.props.menu} />
        </div>
      );
    } else if (this.props.type === "category") {
      return (
        <div style={this.divStyles}>
          <FoodMenuCategoriesEditor data={this.props.category} />
        </div>
      );
    } else if (this.props.type === "item") {
      return (
        <div style={this.divStyles}>
          <FoodMenuItemEditor data={this.props.item} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    menus: state.foodMenuState.menus,
    categories: state.foodMenuState.categories,
    items: state.foodMenuState.items
  };
};

const mapDispatchToProps = {
  loadFoodMenus,
  loadFoodCategories,
  loadFoodItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodMenuEditorRender);

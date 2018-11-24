import React, { Component } from "react";
import { FoodMenuMenusList } from "./FoodMenuMenusList";
import { FoodMenuItemsList } from "./FoodMenuItemsList";
import { FoodMenuCategoriesList } from "./FoodMenuCategoriesList";
import { connect } from "react-redux";
import {
  createFoodItem,
  createFoodCategory,
  createFoodMenu
} from "../../redux/actions/FoodMenuActions";

class FoodMenuElementsList extends Component {
  render() {
    if (this.props.listType === "menus") {
      return (
        <div>
          <FoodMenuMenusList
            setMenuEditor={this.props.setMenuEditor}
            data={this.props.menus}
            create={this.props.createFoodMenu}
            setEditor={this.props.setEditor}
          />
        </div>
      );
    } else if (this.props.listType === "items") {
      return (
        <div>
          <FoodMenuItemsList
            setMenuEditor={this.props.setMenuEditor}
            data={this.props.items}
            create={this.props.createFoodItem}
            setEditor={this.props.setEditor}
          />
        </div>
      );
    } else {
      return (
        <div>
          <FoodMenuCategoriesList
            setMenuEditor={this.props.setMenuEditor}
            data={this.props.categories}
            create={this.props.createFoodCategory}
            setEditor={this.props.setEditor}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    menus: state.foodMenuState.foodMenus,
    categories: state.foodMenuState.foodCategories,
    items: state.foodMenuState.foodItems
  };
};

const mapDispatchToProps = {
  createFoodMenu,
  createFoodCategory,
  createFoodItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodMenuElementsList);

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

// const data = {
//   name: "My_Item_01",
//   description: "no description",
//   price: 2000,
//   image: null,
//   rating: {
//     rating: 4.5,
//     total: 15,
//     stars: {
//       stars5: 5,
//       stars4: 4,
//       stars3: 3,
//       stars2: 2,
//       stars1: 1
//     }
//   }
// };

// const dataCategory = {
//   name: "My_Category_01",
//   prices: [1000, 1500, 1200, 3000],
//   content: []
// };

// const dataMenu = {
//   name: "my_menu_01"
// };

class FoodMenuEditorRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuEditorContent: null,
      categoryEditorContent: null
    };
  }

  componentWillMount = () => {
    this.props.loadFoodMenus();
    this.props.loadFoodCategories();
    this.props.loadFoodItems();
  };

  /**
   * Will populate content array with correct data
   * @param {Object} obj content object, could be "category" or "menu"
   * @returns {Array} array with correct data
   */
  contentManager = obj => {
    if (obj) {
      let { content } = obj;
      if (content) {
        if (content.length > 0) {
          return content.map(ele => {
            if (ele.type === "category") {
              for (let j = 0; j < this.props.categories.length; j++) {
                if (this.props.categories[j].id === ele.id) {
                  return {
                    ...this.props.categories[j],
                    content: this.contentManager(ele)
                  };
                }
              }
            } else if (ele.type === "item") {
              for (let i = 0; i < this.props.items.length; i++) {
                if (this.props.items[i].id === ele.id) {
                  return this.props.items[i];
                }
              }
            }
            return null;
          });
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  };

  //Styles for the divs used in render
  divStyles = {
    marginBottom: "250px"
  };

  render() {
    if (this.props.type === "menu") {
      let content = this.contentManager(this.props.menu);
      let sendData = { ...this.props.menu, content };
      return (
        <div style={this.divStyles}>
          <FoodMenuMenuEditor data={sendData} />
        </div>
      );
    } else if (this.props.type === "category") {
      let content = this.contentManager(this.props.category);
      let sendData = { ...this.props.category, content };
      return (
        <div style={this.divStyles}>
          <FoodMenuCategoriesEditor data={sendData} />
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
    menus: state.foodMenuState.foodMenus,
    categories: state.foodMenuState.foodCategories,
    items: state.foodMenuState.foodItems
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

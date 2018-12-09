import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";

import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";
// import FoodMenuCard from "../card/FoodMenuCard";
// import FoodCategoryCard from "../card/FoodCategoryCard";

import { DropTarget } from "react-dnd";
import { FOOD_MENU_ITEM } from "../../../constants/Draggable";
import { addToContent } from "../../../redux/actions/FoodMenuActions";

import { renderFoodMenuData } from "../FoodMenuGetData";

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

const spec = {
  drop(props, monitor) {
    const item = monitor.getItem();
    if (props.data.id !== item.id) {
      addToContent("foodCategories", props.data.id, {
        type: item.type,
        id: item.id
      });
    }
  }
};

class FoodMenuCategoriesEdior extends Component {
  constructor(props) {
    super(props);
    this.prices = [];
  }

  renderPriceTag = () => {
    if (this.prices.length === 0) {
      return <span>No Prices</span>;
    } else if (this.prices.length === 1) {
      return (
        <span>
          <span style={{ fontSize: "18px" }}>Rs.</span>
          {this.prices[0]}
        </span>
      );
    } else {
      return (
        <span>
          <span style={{ fontSize: "18px" }}>Rs.</span>
          {Math.min(...this.prices)}
          <span style={{ fontSize: "18px" }}>- Rs.</span>
          {Math.max(...this.prices)}
        </span>
      );
    }
  };

  renderContent = () => {
    if (this.props.data) {
      if (this.props.data.content.length === 0) {
        return <div />;
      } else {
        return renderFoodMenuData(this.props.data.content);
      }
    }
  };

  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <FoodMenuEditorTemplate>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              boxShadow:
                "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1) inset",
              padding: "20px"
            }}
          >
            <EditableTextBox
              value={this.props.data.name}
              className="hovarable"
              style={{ margin: "0px", fontWeight: "bold", fontSize: "23px" }}
            />
            <div style={{ margin: "0px", fontSize: "23px" }}>
              {this.renderPriceTag()}
            </div>
          </div>
          <div style={{ marginTop: "10px", minHeight: "70vh" }}>
            {this.renderContent()}
          </div>
        </FoodMenuEditorTemplate>
      </div>
    );
  }
}

export default DropTarget(FOOD_MENU_ITEM, spec, collect)(
  FoodMenuCategoriesEdior
);

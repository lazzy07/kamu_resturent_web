import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";

import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";
import FoodMenuCard from "../card/FoodMenuCard";
import FoodCategoryCard from "../card/FoodCategoryCard";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class FoodMenuCategoriesEdior extends Component {
  renderPriceTag = () => {
    if (this.props.data.prices.length === 0) {
      return <span>No Prices</span>;
    } else if (this.props.data.prices.length === 1) {
      return (
        <span>
          <span style={{ fontSize: "18px" }}>Rs.</span>
          {this.props.data.prices[0]}
        </span>
      );
    } else {
      return (
        <span>
          <span style={{ fontSize: "18px" }}>Rs.</span>
          {Math.min(...this.props.data.prices)}
          <span style={{ fontSize: "18px" }}>- Rs.</span>
          {Math.max(...this.props.data.prices)}
        </span>
      );
    }
  };

  renderContent = () => {
    if (this.props.data.content.length === 0) {
      return (
        <div>
          {/* Drag and drop Categories or items here! */}
          <FoodMenuCard />
          <FoodMenuCard />
          <FoodMenuCard />
          <FoodCategoryCard />
          <FoodCategoryCard />
          <FoodCategoryCard />
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
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
    );
  }
}

export default DragDropContext(HTML5Backend)(FoodMenuCategoriesEdior);

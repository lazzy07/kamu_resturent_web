import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";
import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";

import { DropTarget } from "react-dnd";
import { FOOD_MENU_ITEM } from "../../../constants/Draggable";
import { addToContent } from "../../../redux/actions/FoodMenuActions";
import { renderFoodMenuData } from "../FoodMenuGetData";

const collect = connect => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

const spec = {
  drop(props, monitor) {
    const item = monitor.getItem();
    addToContent("foodMenus", props.data.id, { type: item.type, id: item.id });
  }
};

class FoodMenuMenuEditor extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <FoodMenuEditorTemplate>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 8 }}>
              <EditableTextBox
                value={this.props.data.name}
                onChange={this.props.changeFoodMenuName}
                className="hovarable"
                style={{ margin: "0px", fontWeight: "bold", fontSize: "23px" }}
              />
            </div>
            <div style={{ flex: 6, paddingTop: "8px", textAlign: "right" }}>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Rs 1000 - Rs 9000
              </p>
            </div>
          </div>
          <div>{renderFoodMenuData(this.props.data.content)}</div>
        </FoodMenuEditorTemplate>
      </div>
    );
  }
}

export default DropTarget(FOOD_MENU_ITEM, spec, collect)(FoodMenuMenuEditor);

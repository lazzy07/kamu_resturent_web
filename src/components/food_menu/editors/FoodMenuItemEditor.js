import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";
import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";
import { EditableTextarea } from "../../editable_form/textbox/EditableTextarea";

class FoodMenuItemEditor extends Component {
  render() {
    return (
      <FoodMenuEditorTemplate>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EditableTextBox
            value={this.props.data.name}
            className="hovarable"
            style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Rs.</span>
            <EditableTextBox
              value={this.props.data.price}
              className="hovarable"
              style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}
            />
          </div>
        </div>
        <div>
          {this.props.image ? <img src={this.props.image.url} alt="" /> : null}
        </div>
        <div>
          <EditableTextarea autoFocus value={this.props.data.description} />
        </div>
      </FoodMenuEditorTemplate>
    );
  }
}

export default FoodMenuItemEditor;

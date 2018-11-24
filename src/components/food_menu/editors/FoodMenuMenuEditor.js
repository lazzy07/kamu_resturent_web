import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";
import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";

class FoodMenuMenuEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.setState({
      ...this.props.data
    });
  }

  render() {
    return (
      <FoodMenuEditorTemplate>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 8 }}>
            <EditableTextBox
              value={this.state.name}
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
        <div>Food Menu</div>
      </FoodMenuEditorTemplate>
    );
  }
}

export default FoodMenuMenuEditor;

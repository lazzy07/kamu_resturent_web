import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";
import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";
import { EditableTextarea } from "../../editable_form/textbox/EditableTextarea";
import ProgressiveImage from "../../image_loader/ImageLoader";
import { UploadFileButton } from "../../form/UploadFileButton";
import { StarCountDisplay } from "../../rating_details/StarCountDisplay";
import { RatingDetailsDisplay } from "../../rating_details/RatingDetailsDisplay";

class FoodMenuItemEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount = () => {
    this.setState({
      ...this.props.data
    });
  };

  render() {
    return (
      <FoodMenuEditorTemplate>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EditableTextBox
            value={this.state.name}
            className="hovarable"
            style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Rs.</span>
            <EditableTextBox
              value={this.state.price}
              className="hovarable"
              style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}
            />
          </div>
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <EditableTextarea autoFocus value={this.state.description} />
        </div>
        <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          {this.state.image ? (
            <div style={{ position: "relative" }}>
              <ProgressiveImage
                preview={"/dependencies/pics/egg.jpg"}
                image={"https://dummyimage.com/2000"}
              />
              <div
                className="hovarable hoverRed"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#fff"
                }}
              >
                <h3>X</h3>
              </div>
            </div>
          ) : (
            <div>
              <UploadFileButton />
            </div>
          )}
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <RatingDetailsDisplay
            rating={this.state.rating.rating}
            total={this.state.rating.total}
          />
          <StarCountDisplay data={this.state.rating.stars} barHeight="5px" />
        </div>
        <hr />
      </FoodMenuEditorTemplate>
    );
  }
}

export default FoodMenuItemEditor;

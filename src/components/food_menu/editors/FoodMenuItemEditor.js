import React, { Component } from "react";
import { FoodMenuEditorTemplate } from "./FoodMenuEditorTemplate";
import { EditableTextBox } from "../../editable_form/textbox/EditableTextbox";
import { EditableTextarea } from "../../editable_form/textbox/EditableTextarea";
import ProgressiveImage from "../../image_loader/ImageLoader";
import { UploadFileButton } from "../../form/UploadFileButton";
import { StarCountDisplay } from "../../rating_details/StarCountDisplay";
import { RatingDetailsDisplay } from "../../rating_details/RatingDetailsDisplay";

class FoodMenuItemEditor extends Component {
  render() {
    return (
      <FoodMenuEditorTemplate>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EditableTextBox
            value={this.props.data.name}
            onChange={this.props.changeFoodItemName}
            className="hovarable"
            style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Rs.</span>
            <EditableTextBox
              value={this.props.data.price.toString()}
              onChange={this.props.changeFoodItemprice}
              className="hovarable"
              style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}
            />
          </div>
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <EditableTextarea
            autoFocus
            onChange={this.props.changeFoodItemDescription}
            value={
              this.props.data.description === ""
                ? "No description"
                : this.props.data.description
            }
          />
        </div>
        <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          {this.props.data.image ? (
            <div style={{ position: "relative" }}>
              <ProgressiveImage
                preview={this.props.data.image.preview}
                image={this.props.data.image}
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
            rating={this.props.data.rating.rating}
            total={this.props.data.rating.total}
          />
          <StarCountDisplay
            data={this.props.data.rating.stars}
            barHeight="5px"
          />
        </div>
        <hr />
      </FoodMenuEditorTemplate>
    );
  }
}

export default FoodMenuItemEditor;

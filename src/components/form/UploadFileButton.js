import React, { Component } from "react";
import { MAX_IMAGE_SIZE_CAN_UPLOAD } from "../../constants/index";
import DropZone from "react-dropzone";

const uploadStatus = {
  content: (
    <div
      className="uploadPic hovarable hoverRed greyButton"
      style={{
        width: "100%",
        textAlign: "center",
        borderRadius: "7px",
        padding: "20px"
      }}
    >
      <i style={{ padding: "20px" }} className="fa fa-plus fa-3x" />
      <div style={{ textAlign: "center" }}>
        <p>Upload a file</p>
      </div>
    </div>
  ),

  upload: (
    <div
      className="uploadPic hovarable hoverRed greyButton"
      style={{
        width: "100%",
        textAlign: "center",
        borderRadius: "7px",
        padding: "20px",
        borderColor: "#e8232d"
      }}
    >
      <i
        style={{ padding: "20px", height: "100%", color: "#e8232d" }}
        className="fa fa-check fa-3x"
      />
      <div style={{ textAlign: "center", color: "#e8232d" }}>
        <p>Drop File Here</p>
      </div>
    </div>
  ),
  fail: (
    <div
      className="uploadPic hovarable hoverRed greyButton"
      style={{
        width: "100%",
        textAlign: "center",
        borderRadius: "7px",
        padding: "20px"
      }}
    >
      <i style={{ padding: "20px" }} className="fas fa-check fa-3x" />
      <div style={{ textAlign: "center" }}>
        <p>Not supported</p>
      </div>
    </div>
  )
};

export class UploadFileButton extends Component {
  onDrop = async (acceptedFiles, declinedFiles) => {
    if (acceptedFiles.length > 0) {
      this.props.runOnAccept(acceptedFiles);
    } else {
      if (this.props.runOnReject) {
        this.props.runOnReject();
      }
    }
  };

  render() {
    return (
      <div>
        <DropZone
          multiple={this.props.multiple || false}
          maxSize={MAX_IMAGE_SIZE_CAN_UPLOAD * 1024 * 1024}
          disabled={false}
          onDrop={this.onDrop}
          className="dropzone"
          accept={this.props.accept || "image/jpeg, image/png"}
        >
          {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragActive) {
              return uploadStatus.upload;
            }
            if (isDragReject) {
              return uploadStatus.fail;
            }
            return uploadStatus.content;
          }}
        </DropZone>
      </div>
    );
  }
}

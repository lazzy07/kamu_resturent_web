import React from "react";

export const AddNewButton = props => {
  return (
    <div
      className="uploadPic hovarable hoverRed greyButton"
      onClick={props.onClick}
      style={{
        height: "90%",
        maxWidth: "120px",
        textAlign: "center",
        borderRadius: "7px",
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "10px"
      }}
    >
      <i style={{ padding: "20px" }} className="fa fa-plus fa-3x" />
      <div style={{ textAlign: "center" }}>
        <span>Add new {props.label}</span>
      </div>
    </div>
  );
};

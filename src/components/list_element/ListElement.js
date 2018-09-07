import React from "react";

export const ListElement = props => {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderColor: "#7a7a7a",
        borderWidth: "1px",
        borderRadius: "5px",
        height: "90%",
        minWidth: "230px",
        marginLeft: "5px",
        marginRight: "5px",
        whiteSpace: "nowrap"
      }}
    >
      {props.children}
    </div>
  );
};

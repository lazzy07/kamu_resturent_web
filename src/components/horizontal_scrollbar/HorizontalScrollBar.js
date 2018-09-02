import React from "react";

export const HorizontalScrollBar = props => {
  return (
    <div
      style={{
        height: "170px",
        boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
        display: "flex"
      }}
    >
      {props.children}
    </div>
  );
};

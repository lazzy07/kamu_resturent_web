import React from "react";

export const FoodMenuEditorTemplate = props => {
  return (
    <div
      style={{
        boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)"
      }}
    >
      {props.childern}
    </div>
  );
};

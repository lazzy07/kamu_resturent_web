import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const FoodMenuTabElement = props => {
  return (
    <div className="hovarable hoverRed">
      <p style={{ paddingTop: "13px" }}>
        <i className={props.icon} />
        &nbsp;
        {props.label}
      </p>
    </div>
  );
};

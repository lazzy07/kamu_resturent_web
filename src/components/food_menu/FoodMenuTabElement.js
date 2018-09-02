import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const FoodMenuTabElement = props => {
  const colStyles = {
    active: {
      color: "#e8232d"
    }
  };

  let styles = {};

  if (props.active === props.myType) {
    styles = colStyles.active;
  }

  return (
    <div className="hovarable hoverBlack">
      <p style={{ paddingTop: "13px", ...styles }}>
        <i className={props.icon} />
        &nbsp;
        {props.label}
      </p>
    </div>
  );
};

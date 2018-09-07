import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { getStarRating } from "./StarRatingFunctions";

export const StarRating = props => {
  let starArray = [];

  let fullRating = 0;
  let isHalfRating = 0;

  const starStyle = {
    padding: "2px"
  };

  if (props.rating) {
    fullRating = Math.floor(getStarRating(props.rating));
    if (getStarRating(props.rating) - fullRating === 0.5) {
      isHalfRating = true;
    }
  }

  for (let i = 0; i < fullRating; i++) {
    starArray.push(<i key={i} className="fa fa-star" style={starStyle} />);
  }

  if (isHalfRating) {
    starArray.push(
      <i key={starArray.length} className="fa fa-star-half" style={starStyle} />
    );
  }

  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <p style={{ margin: "0px", padding: "0px" }}>{starArray}</p>
    </div>
  );
};

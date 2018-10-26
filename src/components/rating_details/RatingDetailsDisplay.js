import React from "react";
import { StarRating } from "../star_rating/StarRating";

export const RatingDetailsDisplay = props => {
  return (
    <div>
      <span>Rating : </span>
      <br />
      <span>
        {props.rating ? (
          <span>
            <span style={{ fontSize: "4.5em" }}>
              {props.rating}
              <span
                style={{
                  fontSize: "16px",
                  color: "#7a7a7a"
                }}
              >
                &nbsp;(
                {props.total})
              </span>
            </span>
            <span style={{ fontSize: "20px" }}>
              <br />
              <StarRating rating={props.rating} />
            </span>
          </span>
        ) : (
          <span style={{ fontSize: "1.5em" }}>Not Rated Yet</span>
        )}
      </span>
    </div>
  );
};

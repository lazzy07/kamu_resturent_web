import React, { Component } from "react";
import ProgressiveImage from "../../image_loader/ImageLoader";
import { StarRating } from "../../star_rating/StarRating";
import { getStarRating } from "../../star_rating/StarRatingFunctions";
import Button from "../../button/Button";

import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    return props.handledrop(props.item.id);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging
  };
};

const styles = {
  discountedPrice: {
    color: "#e8233d",
    fontWeight: "bold"
  },
  nodiscount: {
    color: "#252525"
  },
  discountPriceTag: {
    color: "#252525",
    textDecoration: "line-through",
    textDecorationColor: "#e8232d"
  }
};

class FoodCategoryCard extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;

    return connectDragSource(
      <div
        className="col-12"
        style={{
          height: "300px",
          overflow: "hidden",
          position: "relative",
          marginTop: "10px",
          padding: "0px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%"
          }}
        >
          <ProgressiveImage
            preview={"/dependencies/pics/egg.jpg"}
            image={"/dependencies/pics/egg.jpg"}
            style={{
              transform: "translate(-50%,-50%)",
              width: "100%",
              height: "auto"
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: "40vw",
            height: "80%",
            top: "10%",
            left: "20px"
          }}
        >
          <svg
            // viewBox="0 0 200 200"
            version="1.1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                <text className="title" dx="50%" dy="2.5em">
                  FUCK
                </text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(FoodCategoryCard);

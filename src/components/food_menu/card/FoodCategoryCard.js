import React, { Component } from "react";
import { StarRating } from "../../star_rating/StarRating";
import { getStarRating } from "../../star_rating/StarRatingFunctions";
import Button from "../../button/Button";
import CardCarousel from "./card_elements/CardCarousel";

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
        style={{
          height: "450px",
          width: "100%",
          position: "relative",
          marginTop: "20px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px"
          }}
        >
          <CardCarousel />
        </div>
        <div
          style={{
            background:
              "linear-gradient(to top, #e5e6e6 40%, transparent 100%)",
            height: "450px",
            width: "100%",
            position: "relative"
          }}
        >
          <div
            style={{
              height: "450px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "50px"
              }}
            >
              <h3>Submarine</h3>
              <h4>Rs 1000 - Rs 9000</h4>
              <h5>
                Rating : {getStarRating(4.5)}
                <br />
                <StarRating rating={4.5} />
              </h5>
              <Button text="Read More" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(FoodCategoryCard);

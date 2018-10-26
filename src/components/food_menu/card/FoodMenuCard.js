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

class FoodMenuCard extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;

    return connectDragSource(
      <div
        className="col-12"
        style={{
          marginTop: "5px",
          boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
          padding: "5px",
          display: "flex"
        }}
      >
        <div style={{ flex: 4 }}>
          <ProgressiveImage
            preview={"/dependencies/pics/egg.jpg"}
            image={"https://dummyimage.com/2000"}
          />
        </div>
        <div
          style={{
            flex: 8,
            paddingLeft: "5px",
            paddingRight: "5px"
          }}
        >
          <div
            style={{
              fontSize: "1.2em",
              fontWeight: "bold",
              overflow: "hidden"
            }}
          >
            <p>Chicken Submarine</p>
          </div>
          <p>
            <span>Rating : &nbsp;</span>
            <span
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "26px"
              }}
            >
              {getStarRating(4.5)}
            </span>
            <br />
            <div style={{ paddingRight: "5px" }}>
              <StarRating rating={4.5} />
            </div>
          </p>
        </div>
        <div style={{ textAlign: "right", flex: 8 }}>
          <p>
            <span style={styles.discountedPrice}>Rs 1000</span>
            &nbsp;
            <span
              style={
                this.props.isDiscount
                  ? styles.discountPriceTag
                  : styles.nodiscount
              }
            >
              Rs 1000
            </span>
          </p>
        </div>
        <hr />
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(FoodMenuCard);

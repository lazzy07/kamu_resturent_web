import React, { Component } from "react";
import { ListElement } from "../../list_element/ListElement";
import { StarRating } from "../../star_rating/StarRating";
import { getStarRating } from "../../star_rating/StarRatingFunctions";

import "font-awesome/css/font-awesome.min.css";

import { DragSource } from "react-dnd";
import { FOOD_MENU_ITEM } from "../../../constants/Draggable";

const itemSource = {
  beginDrag(props) {
    return { ...props, type: "item" };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging
  };
};

class FoodMenuListItemCard extends Component {
  render() {
    const { connectDragSource } = this.props;

    let renderImage = null;
    if (this.props.image) {
      renderImage = (
        <img
          style={{
            paddingLeft: "15px",
            maxWidth: "150px",
            maxHeight: "150px"
          }}
          src={this.props.image}
          alt=""
        />
      );
    } else {
      renderImage = <h4 style={{ padding: "5px" }}>No Image</h4>;
    }
    return connectDragSource(
      <div>
        <ListElement>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "10px",
              color: "#252525"
            }}
          >
            <div
              style={{
                borderRightWidth: "1px",
                borderRightStyle: "solid",
                borderRightColor: "#7a7a7a",
                paddingRight: "5px"
              }}
            >
              <p>
                <b
                  style={{
                    fontSize: "18px",
                    marginTop: "5px"
                  }}
                >
                  {this.props.name}
                </b>
                <br />
                <span>Rating : &nbsp;</span>
                <span
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontSize: "26px"
                  }}
                >
                  {getStarRating(this.props.rating.rating)}
                </span>
                <br />
                <StarRating rating={this.props.rating.rating} />
                <span>
                  Price : <b>{this.props.price}</b>
                </span>
              </p>
            </div>
            <div>{renderImage}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                marginBottom: "20px"
              }}
            >
              <div>
                <i
                  style={{ padding: "10px" }}
                  className="fa fa-lg fa-arrows hoverRed hovarable"
                />
              </div>
              <div>
                <i
                  onClick={() =>
                    this.props.setEditor(
                      "item",
                      this.props.id,
                      this.props.itemList
                    )
                  }
                  style={{ padding: "10px" }}
                  className="fa fa-lg fa-edit hoverRed hovarable"
                />
              </div>
            </div>
          </div>
        </ListElement>
      </div>
    );
  }
}

export default DragSource(FOOD_MENU_ITEM, itemSource, collect)(
  FoodMenuListItemCard
);

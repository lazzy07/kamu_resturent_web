import React, { Component } from "react";
import { ListElement } from "../../list_element/ListElement";
import { StarRating } from "../../star_rating/StarRating";
import { getStarRating } from "../../star_rating/StarRatingFunctions";

export class FoodMenuListMenuCard extends Component {
  render() {
    return (
      <ListElement>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            padding: "10px",
            color: "#252525",
            justifyContent: "center"
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <div
              style={{
                paddingTop: "10px",
                paddingBottom: "2px",
                marginBottom: "2px",
                width: "100%",
                textAlign: "right",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#7a7a7a"
              }}
            >
              <i
                onClick={() => this.props.setEditor("menu")}
                className="fa fa-edit fa-lg hovarable hoverRed"
              />
            </div>
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
                {getStarRating(this.props.rating)}
              </span>
              <br />
              <StarRating rating={this.props.rating} />
              <span>
                Price : <b>{this.props.price}</b>
              </span>
            </p>
          </div>
        </div>
      </ListElement>
    );
  }
}

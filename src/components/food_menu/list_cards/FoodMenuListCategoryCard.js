import React, { Component } from "react";
import { ListElement } from "../../list_element/ListElement";
import { StarRating } from "../../star_rating/StarRating";
import { getStarRating } from "../../star_rating/StarRatingFunctions";

export class FoodMenuListCategoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  getPriceRange = elements => {
    let lowest = 0;
    let highest = 0;

    for (let i = 0; i < elements.length; i++) {
      if (lowest > elements[i].price) {
        lowest = elements[i].price;
      }
      if (highest < elements[i].price) {
        highest = elements[i].price;
      }
    }

    return { lowest, highest };
  };

  contentText = content => {
    const ulStyle = {
      paddingLeft: "14px"
    };

    if (content) {
      if (content.length === 1) {
        return (
          <ul style={ulStyle}>
            <li>{content[0].name}</li>
          </ul>
        );
      } else if (content.length === 0) {
        return (
          <ul style={ulStyle}>
            <li>Empty Category</li>
          </ul>
        );
      } else if (content.length === 2) {
        return (
          <ul style={ulStyle}>
            <li>{content[0].name}</li>
            <li>{content[1].name}</li>
          </ul>
        );
      } else {
        return (
          <ul style={ulStyle}>
            <li>{content[0].name}</li>
            <li>{content[1].name}</li>
            more...
          </ul>
        );
      }
    }
  };

  render() {
    return (
      <ListElement>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            padding: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "#7a7a7a",
              height: "100%",
              paddingRight: "5px"
            }}
          >
            <div>
              <p style={{ marginBottom: "1px" }}>
                <span>
                  <b style={{ fontSize: "18px" }}>{this.props.name}</b>
                </span>
                <br />
                <span style={{ fontSize: "14px", color: "#7a7a7a" }}>
                  Content:
                </span>
                <br />
              </p>
              <span style={{ fontSize: "12px", color: "#7a7a7a" }}>
                {this.contentText(this.props.content)}
              </span>
            </div>
          </div>
          <div
            style={{
              paddingLeft: "5px",
              paddingRight: "5px",
              flexDirection: "row",
              alignItems: "center",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "#7a7a7a"
            }}
          >
            <p style={{ margin: "0px" }}>Rating :</p>
            <h1 style={{ margin: "0px", padding: "0px" }}>
              {getStarRating(this.props.rating)}
            </h1>
            <StarRating rating={this.props.rating} />
            <p style={{ marginBottom: "0px" }}>
              Price : <b>2000 - 4000</b>
            </p>
          </div>
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
                style={{ padding: "5px", paddingBottom: "20px" }}
                className="fa fa-lg fa-arrows hoverRed hovarable"
              />
            </div>
            <div onClick={() => this.props.setEditor("category")}>
              <i
                style={{ padding: "5px" }}
                className="fa fa-lg fa-edit hoverRed hovarable"
              />
            </div>
          </div>
        </div>
      </ListElement>
    );
  }
}

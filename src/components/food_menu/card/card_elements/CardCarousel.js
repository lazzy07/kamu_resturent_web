import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ProgressiveImage from "../../../image_loader/ImageLoader";

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.renderContent = [];
  }

  contentRender = val => {
    if (val) {
      let offer = true;
      this.renderContent = val.map((elem, index) => {
        return (
          <div
            key={index}
            style={{ padding: "20px", backgroundColor: "#e5e6e6" }}
          >
            <ProgressiveImage
              preview={elem.imagePreview}
              image={elem.image}
              style={{
                transform: "translate(0%, 0%)"
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                color: "#fff",
                backgroundColor: offer ? "#e8232d" : "#7a7a7a",
                paddingLeft: "5px",
                paddingRight: "5px"
              }}
            >
              <h3>{elem.name}</h3>
              <span>{elem.price}</span>
              <br />
              <strike>{elem.originalPrice}</strike>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    this.contentRender(this.props.data);
    return (
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          centerMode={true}
          statusFormatter={() => ""}
        >
          {this.renderContent}
        </Carousel>
      </div>
    );
  }
}

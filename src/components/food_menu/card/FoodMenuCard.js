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

// const styles = {
//   discountedPrice: {
//     color: "#e8233d",
//     fontWeight: "bold"
//   },
//   nodiscount: {
//     color: "#252525"
//   },
//   discountPriceTag: {
//     color: "#252525",
//     textDecoration: "line-through",
//     textDecorationColor: "#e8232d"
//   }
// };

class FoodMenuCard extends Component {
  render() {
    const { connectDragSource } = this.props;

    return connectDragSource(
      <div>
        <div
          className="d-none d-lg-block"
          style={{
            position: "relative",
            overflow: "hidden",
            marginTop: "20px",
            height: "300px"
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "300px",
              paddingBottom: "10px"
            }}
          >
            <ProgressiveImage
              preview={"/dependencies/pics/egg.jpg"}
              image={"/dependencies/pics/egg.jpg"}
              style={{
                transform: "translate(-20%, 0%)",
                height: "150%",
                width: "auto"
              }}
            />
          </div>
          <div
            className="col-12"
            style={{
              background:
                "linear-gradient(to left, #e5e6e6 60%, transparent 100%)",
              height: "300px",
              paddingLeft: "30%",
              paddingTop: "10px",
              paddingRight: "10px",
              paddingBottom: "10px"
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Chicken Submarine</h3>
            <p style={{ maxHeight: "90px", overflow: "hidden" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus faucibus scelerisque eleifend donec pretium vulputate
              sapien. Dignissim diam quis enim lobortis scelerisque fermentum
              dui. Aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque. Ultricies mi eget mauris pharetra et ultrices neque
              ornare aenean. Sit amet luctus venenatis lectus magna fringilla
              urna porttitor. Fermentum et sollicitudin ac orci phasellus.
              Ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget. Tellus orci ac auctor augue mauris augue neque. Fringilla
              est ullamcorper eget nulla facilisi etiam dignissim diam. Quisque
              non tellus orci ac auctor augue mauris augue. Ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit eget. Egestas pretium
              aenean pharetra magna.
            </p>
            <br />
            <h5>
              Rating : {getStarRating(4.5)}
              <br />
              <StarRating rating={4.5} />
            </h5>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                <Button text="Read More" />
              </div>
              <div>
                <Button text="Order" />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#252525",
                color: "#fff",
                padding: "10px",
                position: "absolute",
                fontWeight: "bold",
                fontSize: "20px",
                left: "0px",
                top: "0px"
              }}
            >
              Rs. 1000/=
            </div>
            <div
              style={{
                backgroundColor: "#e8232d",
                color: "#fff",
                padding: "10px",
                position: "absolute",
                fontWeight: "bold",
                fontSize: "20px",
                left: "0px",
                top: "0px"
              }}
            >
              <div style={{ fontSize: "14px" }}>
                <strike>Rs. 1000/=</strike>
              </div>
              <div style={{}}>Rs. 2000/=</div>
            </div>
          </div>
        </div>
        <div
          className="d-lg-none"
          style={{
            overflow: "hidden",
            position: "relative",
            marginTop: "10px"
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "450px",
              paddingBottom: "10px"
            }}
          >
            <ProgressiveImage
              preview={"/dependencies/pics/egg.jpg"}
              image={"/dependencies/pics/egg.jpg"}
              style={{
                transform: "translate(0%, -20%)",
                height: "auto",
                width: "100%"
              }}
            />
          </div>
          <div
            className="col-12"
            style={{
              background:
                "linear-gradient(to top, #e5e6e6 70%, transparent 100%)",
              height: "450px",
              paddingLeft: "10px",
              paddingTop: "30%",
              paddingRight: "10px",
              paddingBottom: "10px"
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Chicken Submarine</h3>
            <p style={{ maxHeight: "90px", overflow: "hidden" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus faucibus scelerisque eleifend donec pretium vulputate
              sapien. Dignissim diam quis enim lobortis scelerisque fermentum
              dui. Aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque. Ultricies mi eget mauris pharetra et ultrices neque
              ornare aenean. Sit amet luctus venenatis lectus magna fringilla
              urna porttitor. Fermentum et sollicitudin ac orci phasellus.
              Ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget. Tellus orci ac auctor augue mauris augue neque. Fringilla
              est ullamcorper eget nulla facilisi etiam dignissim diam. Quisque
              non tellus orci ac auctor augue mauris augue. Ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit eget. Egestas pretium
              aenean pharetra magna.
            </p>
            <br />
            <h5>
              Rating : {getStarRating(4.5)}
              <br />
              <StarRating rating={4.5} />
            </h5>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                <Button text="Read More" />
              </div>
              <div>
                <Button text="Order" />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#252525",
                color: "#fff",
                padding: "10px",
                position: "absolute",
                fontWeight: "bold",
                fontSize: "20px",
                left: "0px",
                top: "0px"
              }}
            >
              Rs. 1000/=
            </div>
            <div
              style={{
                backgroundColor: "#e8232d",
                color: "#fff",
                padding: "10px",
                position: "absolute",
                fontWeight: "bold",
                fontSize: "20px",
                left: "0px",
                top: "0px"
              }}
            >
              <span style={{ fontSize: "14px" }}>
                <strike>Rs. 1000/=</strike>
              </span>
              &nbsp;
              <span style={{}}>Rs. 2000/=</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(FoodMenuCard);

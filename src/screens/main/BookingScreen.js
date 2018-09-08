import React, { Component } from "react";
import Lottie from "react-lottie";

import Navbar from "../../components/navbar/Navbar";
import * as animationData from "../../animations/booking/data.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
class BookingScreen extends Component {
  render() {
    let bookingData = null;
    if (bookingData) {
      return (
        <div>
          <div style={{ padding: "100px" }}>Booking Screen</div>
          <Navbar active={2} />
        </div>
      );
    } else {
      return (
        <div>
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%"
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#7a7a7a",
                paddingTop: "70px"
              }}
            >
              <p>Booking Requests not found</p>
            </div>
            <Lottie options={defaultOptions} height={"300px"} width={"300px"} />
            {/* <div style={{textAlign: 'center', color: '#7a7a7a', padding: '5px'}}>
                                <p><a style={{color: '#e8232d'}}>Click Here</a><br/>To create a Food Menu</p>
                            </div> */}
          </div>
          <Navbar active={2} />
        </div>
      );
    }
  }
}

export default BookingScreen;

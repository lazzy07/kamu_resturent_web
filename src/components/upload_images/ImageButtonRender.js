import React, { Component } from "react";
import { connect } from "react-redux";

import UploadPictureButton from "../form/UploadPictureButton";

class ImageButtonArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonArray: [
        <div key={0} style={{ marginTop: "10px" }} className="col-12 col-md-4">
          <UploadPictureButton
            removeButton={id => this.removeButton(id)}
            addNewButton={this.addNewButton}
            id={0}
          />
        </div>
      ],
      id: 0,
      mapArray: [0]
    };
  }

  addNewButton = () => {
    let button = (
      <div
        key={this.state.id + 1}
        style={{ marginTop: "10px" }}
        className="col-12 col-md-4"
      >
        <UploadPictureButton
          removeButton={id => this.removeButton(id)}
          addNewButton={this.addNewButton}
          id={this.state.id + 1}
        />
      </div>
    );

    let arr = this.state.buttonArray;
    let newMapArr = this.state.mapArray;
    if (newMapArr.length < 5) {
      arr.push(button);
      newMapArr.push(this.state.id + 1);
      this.setState({
        buttonArray: arr,
        id: this.state.id + 1,
        mapArray: newMapArr
      });
    }
  };

  removeButton = id => {
    let newArr = [];
    let newMapArr = this.state.mapArray;
    for (let i = 0; i < this.state.buttonArray.length; i++) {
      if (newMapArr.indexOf(id) !== i) {
        newArr.push(this.state.buttonArray[i]);
      }
    }
    if (newMapArr.indexOf(id) !== -1)
      newMapArr.splice(newMapArr.indexOf(id), 1);

    if (this.props.prevImgLen === 5) {
      let button = (
        <div
          key={this.state.id + 1}
          style={{ marginTop: "10px" }}
          className="col-12 col-md-4"
        >
          <UploadPictureButton
            removeButton={id => this.removeButton(id)}
            addNewButton={this.addNewButton}
            id={this.state.id + 1}
          />
        </div>
      );
      newArr.push(button);
      newMapArr.push(this.state.id + 1);
      this.setState({
        id: this.state.id + 1
      });
    }

    this.setState({
      buttonArray: newArr,
      mapArray: newMapArr
    });
  };

  render() {
    return (
      <div
        style={{ paddingLeft: "10px", paddingRight: "10px", width: "100%" }}
        className="row"
      >
        {this.state.buttonArray}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noOfButtonsRequired: state.newOffer.uploadImageButtons,
    prevImgLen: state.newOffer.images.length
  };
};

export default connect(
  mapStateToProps,
  null
)(ImageButtonArray);

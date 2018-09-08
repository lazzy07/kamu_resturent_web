import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";

import { InputArea } from "../form/InputArea";
import ImageButtonRender from "../upload_images/ImageButtonRender";
import { InputBox } from "../form/InputBox";
import Button from "../button/Button";
import TagInput from "../form/TagInput";

import { MAX_IMAGE_SIZE_CAN_UPLOAD } from "../../constants";

class CreateOfferForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      hashTag: "",
      price: "",
      discount: "",
      buttonOpacity: 1,
      buttonText: "Create Offer",
      mainMessage: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.hashTag !== "") {
      if (this.state.hashTag.indexOf(" ") === -1) {
        if (this.state.description !== "" || this.props.images.length !== 0) {
          if (this.state.hashTag.charAt(0) !== "#") {
            axios.post("addOfferByResturent", {
              hashTag: this.state.hashTag,
              description: this.state.description,
              price: this.state.price,
              discount: this.state.discount,
              tags: this.state.tags
            });
            this.setState({
              buttonOpacity: 0.5,
              buttonText: "Creating.."
            });
          } else {
            this.setState({
              mainMessage: "Hashtag must start with a '#'"
            });
          }
        }
      } else {
        this.setState({
          mainMessage: "Hashtag can't have spaces eg: #cheese_pizza"
        });
      }
    } else {
      this.setState({
        mainMessage: "Hashtag can't be empty eg: #cheese_pizza"
      });
    }
  };

  render() {
    return (
      <form>
        <div className="col-6 col-md-4">
          <InputBox
            description="Eg: #pizza_friday"
            inputStyles={{ borderColor: "#7a7a7a" }}
            name="hashTag"
            type="text"
            placeHolder="Hashtag"
            onChange={e => this.onChange(e)}
            value={this.state.hashTag}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1, padding: "10px" }}>
            <InputArea
              name="description"
              rows={4}
              placeHolder="Enter Description"
              styles={{
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)",
                resize: "none",
                marginLeft: "0px"
              }}
              onChange={e => this.onChange(e)}
              value={this.state.description}
            />
          </div>
        </div>
        <ImageButtonRender />
        <div
          style={{
            paddingLeft: "25px",
            paddingRight: "10px",
            paddingTop: "5px"
          }}
          className="row"
        >
          <p style={{ color: "#7a7a7a", fontSize: "14px" }}>
            Maximum file size is : {MAX_IMAGE_SIZE_CAN_UPLOAD}
            MB
          </p>
        </div>
        <div
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "15px"
          }}
          className="row"
        >
          <div className="col-6 col-md-4">
            <InputBox
              description="Eg: 250"
              inputStyles={{ borderColor: "#7a7a7a" }}
              //label = "Price"
              name="price"
              type="text"
              placeHolder="Price"
              onChange={e => this.onChange(e)}
              value={this.state.price}
            />
          </div>
          <div className="col-6 col-md-4">
            <InputBox
              inputStyles={{ borderColor: "#7a7a7a" }}
              // label="Discount"
              name="discount"
              type="text"
              placeHolder="Discount"
              description="eg: 25% or Discounted price 200 or -200 to substract from the price"
              onChange={e => this.onChange(e)}
              value={this.state.discount}
            />
          </div>
        </div>
        <div
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "15px"
          }}
          className="row"
        >
          <div className="col-12 col-md-6">
            <TagInput placeHolder="Enter Tags" />
            <span style={{ color: "#7a7a7a", fontSize: "14px" }}>
              Enter tags so people can search your offer
            </span>
          </div>
        </div>
        <div
          style={{
            color: "#7a7a7a",
            fontSize: "15px",
            textAlign: "center",
            padding: "40px",
            fontWeight: "bold"
          }}
        >
          {this.state.mainMessage}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ paddingRight: "10px" }}>
            <Button
              text={this.state.buttonText}
              onClick={e => this.onSubmit(e)}
              normStyles={{
                backgroundColor: "#e8232d",
                borderColor: "#e8232d",
                color: "#fff",
                opacity: this.state.buttonOpacity
              }}
            />
          </div>
          <Button
            onClick={() => {
              this.props.closeModal();
              this.props.setToInitial();
            }}
            text="Cancel"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isModalOpen: state.newOffer.createOfferModalOpen,
    images: state.newOffer.images,
    tags: state.newOffer.tags
  };
};

export default connect(
  mapStateToProps,
  null
)(CreateOfferForm);

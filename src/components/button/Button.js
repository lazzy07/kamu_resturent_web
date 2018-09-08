import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  toggleHover = () => {
    this.setState({
      isHover: !this.state.isHover
    });
  };

  render() {
    let buttonStyle;

    if (this.state.isHover) {
      buttonStyle = {
        backgroundColor: "#8e232d",
        borderColor: "#e8232d",
        color: "#fff",
        ...this.props.hoverStyles
      };
    } else {
      buttonStyle = {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0.7)",
        color: "#252525",
        ...this.props.normStyles
      };
    }

    return (
      <button
        type={this.props.type}
        onMouseLeave={this.toggleHover}
        onMouseEnter={this.toggleHover}
        className="btn btn-primary buttonStyles"
        style={buttonStyle}
        onClick={e => this.props.onClick(e)}
      >
        {this.props.text}
      </button>
    );
  }
}

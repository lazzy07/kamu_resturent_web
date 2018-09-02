import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleActive = () => {
    this.setState({
      isActive: this.props.isActive
    });
  };

  componentWillMount() {
    this.toggleActive();
  }

  render() {
    let style;

    if (this.props.isActive) {
      style = {
        color: "#e8232d",
        fontWeight: "bold"
      };
    } else {
      style = {
        color: "#252525"
      };
    }
    return (
      <div>
        <p style={{ ...style, fontSize: 15 }}>
          <i className={this.props.icon} />
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default NavButton;

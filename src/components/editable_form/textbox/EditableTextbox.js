import React, { Component } from "react";
import InlineEdit from "react-edit-inline";

import "font-awesome/css/font-awesome.min.css";

export class EditableTextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  render() {
    let op = 0;
    if (this.state.hover) {
      op = 1;
    }
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        style={{ display: "flex" }}
      >
        <InlineEdit
          className={this.props.className}
          text={this.props.value}
          paramName={this.props.name}
          change={data => this.props.onChange(data)}
          style={{
            backgroundColor: "#fff",
            display: "inline-block",
            margin: 0,
            padding: "4px",
            borderRadius: "5px",
            fontSize: 18,
            outline: 0,
            border: 0,
            ...this.props.style
          }}
        />
        <div
          style={{
            display: "flex",
            padding: "5px",
            opacity: op,
            alignItems: "center"
          }}
        >
          <i className="fa fa-edit fa-lg" />
        </div>
      </div>
    );
  }
}

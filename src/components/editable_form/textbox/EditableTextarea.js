import React, { Component } from "react";
import { InputArea } from "../../form/InputArea";

import "font-awesome/css/font-awesome.min.css";

export class EditableTextarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      hover: false
    };
  }
  render() {
    if (this.state.edit) {
      return (
        <div
          onBlur={() => this.setState({ edit: false, hover: false })}
          style={{ ...this.props.style }}
        >
          <InputArea
            autoFocus={this.props.autoFocus}
            styles={this.props.style}
            value={this.props.value}
            name={this.props.name}
            rows={this.props.rows || 1}
            placeHolder={this.props.placeHolder}
            onChange={data => this.props.onChange(data)}
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <div
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            onClick={() => this.setState({ edit: true })}
            style={{ paddingLeft: "5px", ...this.props.style }}
          >
            {this.props.value}{" "}
            {this.state.hover ? <i className="fa fa-edit fa-lg" /> : null}
          </div>
        </div>
      );
    }
  }
}

import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";

class InputArea extends Component {
  render() {
    return (
      <TextareaAutosize
        style={{
          width: "82%",
          fontSize: "14px",
          marginTop: "5px",
          marginLeft: "5px",
          padding: "7px",
          borderRadius: "5px",
          ...this.props.styles
        }}
        name={this.props.name}
        rows={this.props.rows}
        autoFocus={this.props.autoFocus}
        placeholder={this.props.placeHolder}
        onChange={e => {
          this.props.onChange(e);
        }}
        value={this.props.value}
      />
    );
  }
}

export { InputArea };

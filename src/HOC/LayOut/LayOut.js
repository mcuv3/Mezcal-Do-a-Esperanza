import React, { Component } from "react";

export class LayOut extends Component {
  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default LayOut;

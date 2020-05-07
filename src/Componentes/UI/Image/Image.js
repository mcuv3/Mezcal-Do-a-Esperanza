import React from "react";

function Image(props) {
  return (
    <img
      alt={props.Alt}
      src={props.url}
      style={{ width: props.width, height: props.height }}
      onClick={props.click}
    />
  );
}

export default Image;

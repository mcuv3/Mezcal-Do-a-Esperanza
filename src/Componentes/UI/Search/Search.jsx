import React, { useState, useRef, useEffect } from "react";
import classes from "./Search.css";

const Search = React.memo((props) => {
  const currentProductName = useRef();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (productName === currentProductName.current.value) {
        props.change(currentProductName.current.value);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [productName, currentProductName, props]);

  return (
    <div className={classes.Input}>
      <input
        ref={currentProductName}
        type="text"
        placeholder=" Search"
        className={classes.PlaceHolder}
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
    </div>
  );
});

export default Search;

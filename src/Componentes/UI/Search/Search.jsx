import React from "react";
import classes from "./Search.css";
const Search = () => {
  let place = <i class="fal fa-search">Search</i>;
  return (
    <div className={classes.Input}>
      <input
        type="text"
        placeholder=" Search"
        className={classes.PlaceHolder}
      />
    </div>
  );
};

export default Search;

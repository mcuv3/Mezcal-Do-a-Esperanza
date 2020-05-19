import React from "react";
import classes from "./NavPages.css";

const NavPages = (props) => {
  return (
    <div className={classes.Pages}>
      <button
        className={classes.prev}
        onClick={() => props.change(false)}
        disabled={props.page === 0}
      >
        <i className="fas fa-backward"></i>
      </button>
      <div className={classes.page}>{props.page + 1}</div>
      <button
        className={classes.next}
        onClick={() => props.change(true)}
        disabled={props.page + 1 === props.maxPage}
      >
        <i className="fas fa-forward"></i>
      </button>
    </div>
  );
};

export default NavPages;

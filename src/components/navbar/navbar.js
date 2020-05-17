import React, { Component } from "react";

import classes from "./styles.module.css";

export class navbar extends Component {
  render() {
    return (
      <ul className={classes.Navbar}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    );
  }
}

export default navbar;

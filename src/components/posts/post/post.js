import React, { Component } from "react";
import classes from "./styles.module.css";

export class post extends Component {
  render() {
    return (
      <>
        <h2 className={classes.Title}>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default post;

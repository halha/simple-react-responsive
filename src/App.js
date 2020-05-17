import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Posts from "./components/posts/posts";
import About from "./components/about/about";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    let windowWidth = typeof window !== undefined ? window.innerWidth : 0;
    let windowHeight = typeof window !== undefined ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="contentContainer">
          <div className="postSect">
            <Posts />
          </div>
          {this.state.windowWidth > 768 ? (
            <div className="aboutSect">
              <About />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

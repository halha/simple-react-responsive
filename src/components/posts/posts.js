import React, { Component } from "react";
import Post from "./post/post";
import classes from "./styles.module.css";

export class posts extends Component {
  constructor() {
    super();

    this.state = {
      post: [
        {
          id: 1,
          title: "Title 1",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: 2,
          title: "Title 2",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: 3,
          title: "Title 3",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: 4,
          title: "Title 4",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
      ],
    };
  }
  render() {
    return (
      <div className={classes.Posts}>
        {this.state.post.map((post) => (
          <div key={post.id}>
            <Post title={post.title} description={post.description} />
          </div>
        ))}
      </div>
    );
  }
}

export default posts;

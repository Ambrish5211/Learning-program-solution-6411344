import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Step 6: loadPosts method
  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      throw new Error("Failed to load posts");
    }
  };

  // Step 7: componentDidMount lifecycle
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: componentDidCatch lifecycle
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("An error occurred: " + error.message);
  }

  // Step 8: render method
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

import React, { Component } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';

export default class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <h2> Posts </h2>
        <PostForm/>
        <PostList data={ [] }/>
      </div>
    );
  }
}

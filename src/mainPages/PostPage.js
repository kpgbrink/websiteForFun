import React, { Component } from 'react';
import PostBox from './Post/PostBox';

export default class PostPage extends Component {
  render() {
    return (
      <div className="PostPage">
        <p className="Description">
          Hello this is the posts page yeee. ree referenced
        </p>
        <PostBox
        url='http://localhost:3001/api/mainPosts'
        pollInterval={2000} />
      </div>
    );
  }
}

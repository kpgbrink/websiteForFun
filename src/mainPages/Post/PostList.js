import React, { Component } from 'react';
import Post from './Post';


export default class PostList extends Component {
  render() {
    let commentNodes = this.props.data.map(post => {
      return (
        <Post author={ post.author } key={ post._id }>
        { post.text }
        </Post>
      )
    })
    return (
      <div>
      { commentNodes }
      </div>
    )
  }
}

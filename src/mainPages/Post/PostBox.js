import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';

export default class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadPosts = this.loadPosts.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  loadPosts() {
    axios.get(this.props.url)
    .then(res => {
      console.log('heyy');
      this.setState({ data: res.data });
    })
  }

  instantResponse(post) {
    let posts = this.state.data;
    post.id = Date.now();
    let newPosts = posts.concat([post]);
    this.setState({data: newPosts });
  }

  handlePostSubmit(post) {
    this.instantResponse(post);
    axios.post(this.props.url, post)
    .then(res => {
      this.setState({ data: res });
    })
    .catch(err => {
      console.error(err);
    });
  }

  componentDidMount() {
    this.loadPosts();
    setInterval(this.loadPosts, this.props.pollInterval);
  }

  render() {
    return (
      <div>
        <h2> Posts </h2>
        <PostForm onPostSubmit={ this.handlePostSubmit }/>
        <PostList data={ this.state.data }/>
      </div>
    );
  }
}

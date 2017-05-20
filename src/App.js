import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

// main pages
import HomePage from './mainPages/HomePage';
import PostPage from './mainPages/PostPage';
import ProjectPage from './mainPages/ProjectPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Kris sites</h2>
          <Links />
        </div>
        <PageSwitcher />
      </div>
    );
  }
}

const Links = () => (
  <nav className="PageLinks">
    <ul>
      <li> <Link to='/'> Home </Link></li>
      <li> <Link to='/posts'> Posts </Link></li>
      <li> <Link to='/projectPage'> Projects </Link></li>
    </ul>
  </nav>
)

const PageSwitcher = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/posts' component={PostPage}/>
    <Route path='/projectPage' component={ProjectPage}/>
  </Switch>
)

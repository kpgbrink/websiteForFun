import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import logo from './images/logo.svg';
import './App.css';

// main pages
import HomePage from './mainPages/HomePage';
import PostPage from './mainPages/PostPage';
import ProjectPage from './mainPages/ProjectPage';
import NotFound from './mainPages/NotFound';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Procere</h2>
          <div className="App-header-bottom">
            <img src={logo} className="App-logo" alt="logo"/>
            <Links />
          </div>
        </div>
        <div className="Page">
          <PageSwitcher />
        </div>
      </div>
    );
  }
}

const Links = () => (
  <nav className="PageLinks">
    <ul className="PageLinksList">
      <li> <NavLink exact to='/' activeClassName="Selected"> Home </NavLink></li>
      <li> <NavLink to='/posts' activeClassName="Selected"> Posts </NavLink></li>
      <li> <NavLink to='/projectPage' activeClassName="Selected"> Projects </NavLink></li>
    </ul>
  </nav>
)

const PageSwitcher = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/posts' component={PostPage}/>
    <Route path='/projectPage' component={ProjectPage}/>
    <Route path='*' component={NotFound}/>
  </Switch>
)

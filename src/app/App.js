import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import PostListContainer from './components/Posts/PostList/PostListContainer';
import DisplayPostContainer from './components/Posts/DisplayPost/DisplayPostContainer';

export const App = () =>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Switch>
        <Route exact path="/" component={PostListContainer} />
        <Route exact path="/post/:id" component={DisplayPostContainer} />
      </Switch>
    </div>;

export default App;

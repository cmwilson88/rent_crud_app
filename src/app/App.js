import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from './redux/posts/actions';
import logo from './logo.svg';
import './App.css';

export const App = props =>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        <button onClick={props.getAllPosts}>Click for Props</button>
      </p>
    </div>;

export default connect(null, { getAllPosts })(App);

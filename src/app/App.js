import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Component Imports
import NavigationBar from './components/NavigationBar';
import PostListContainer from './components/Posts/PostList/PostListContainer';
import DisplayPostContainer from './components/Posts/DisplayPost/DisplayPostContainer';

export const App = () =>
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={PostListContainer} />
        <Route exact path="/post/:id" component={DisplayPostContainer} />
        <Redirect to="/" />
      </Switch>
    </div>;

export default App;

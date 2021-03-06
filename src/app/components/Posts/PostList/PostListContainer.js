import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PostList.css';

// Component Imports
import PostList from './PostList';

// Redux Imports
import { getAllPosts } from '../../../redux/posts/actions';
import { getAllUsers } from '../../../redux/users/actions';
import { addUserToPost } from '../../../redux/posts/selectors';


export class PostListContainer extends Component {
  // Local methods
  getAllPosts = () => this.props.getAllPosts();
  getAllUsers = () => this.props.getAllUsers();

  componentDidMount() {
    this.getAllPosts();
    this.getAllUsers();
  }

  render() {
    const { posts } = this.props;
    
    // Render list if we receive posts from redux
    return posts ? (
        <PostList posts={posts} />
    ) : null;
  }
}

PostListContainer.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  posts: PropTypes.array
};

const mapStateToProps = state => ({
  posts: addUserToPost(state.users.users, state.posts.posts)
});

export default connect(mapStateToProps, { getAllPosts, getAllUsers })(PostListContainer);

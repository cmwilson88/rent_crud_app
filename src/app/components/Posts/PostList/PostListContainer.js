import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPosts } from '../../../redux/posts/actions';

import PostList from './PostList';

export class PostListContainer extends Component {

  // Local methods
  getAllPosts = () => this.props.getAllPosts();
  componentDidMount() {
    this.getAllPosts()
  }

  render() {
    const { posts } = this.props;

    return posts ? (
        <PostList posts={posts} />
    ) : null;
  }
}

PostListContainer.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.array
};

const mapStateToProps = state => ({ posts: state.posts.posts })

export default connect(mapStateToProps, { getAllPosts })(PostListContainer);

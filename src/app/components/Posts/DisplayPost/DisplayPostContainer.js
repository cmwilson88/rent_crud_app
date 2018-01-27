import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Component Imports
import DisplayPost from './DisplayPost';
import ErrorPage from '../../ErrorPage';

// Redux Imports
import { getCommentsByPost } from '../../../redux/comments/actions';
import { getPostById } from '../../../redux/posts/actions';

export class DisplayPostContainer extends Component {
  componentDidMount() {
    this.getSelectedPost();
    this.getCommentsByPost();
  }
  getSelectedPost = () => this.props.getPostById(this.props.match.params.id);
  getCommentsByPost = () => this.props.getCommentsByPost(this.props.match.params.id);
  
  render() {
    const { post, comments } = this.props;

    return post ?
      <DisplayPost post={post} comments={comments} />
      :
      <ErrorPage />;
  }
}

DisplayPostContainer.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array,
  getPostById: PropTypes.func.isRequired,
  getCommentsByPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
  }),
};

const mapStateToProps = state => ({
  post: state.posts.selectedPost,
  comments: state.comments.comments
});

export default connect(mapStateToProps, { getPostById, getCommentsByPost })(DisplayPostContainer);
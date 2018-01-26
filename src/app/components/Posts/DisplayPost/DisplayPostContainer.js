import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostById } from '../../../redux/posts/actions';
import { getCommentsByPost } from '../../../redux/comments/actions';

import DisplayPost from './DisplayPost';

export class DisplayPostContainer extends Component {
  componentDidMount() {
    Promise.resolve(this.getSelectedPost(), this.getCommentsByPost()).then(this.setState({ready:true}))
  }
  getSelectedPost = () => this.props.getPostById(this.props.match.params.id);
  getCommentsByPost = () => this.props.getCommentsByPost(this.props.match.params.id);
  render() {
    const { post, comments } = this.props;

    return post ? (
      <DisplayPost post={post} comments={comments} />
    ) : null;
  }
}

DisplayPostContainer.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array,
  getPostById: PropTypes.func.isRequired,
  getCommentsByPost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.posts.selectedPost,
  comments: state.comments.comments
});

export default connect(mapStateToProps, { getPostById, getCommentsByPost })(DisplayPostContainer);
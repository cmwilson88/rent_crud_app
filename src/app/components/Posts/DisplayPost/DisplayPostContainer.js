import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostById } from '../../../redux/posts/actions';

import DisplayPost from './DisplayPost';

export class DisplayPostContainer extends Component {
  componentDidMount() {
    this.getSelectedPost();
  }
  getSelectedPost = () => this.props.getPostById(this.props.match.params.id);

  render() {
    const { post } = this.props;

    return post ? (
      <DisplayPost post={post} />
    ) : null;
  }
}

DisplayPostContainer.propTypes = {
  post: PropTypes.object,
  getPostById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.posts.selectedPost
});

export default connect(mapStateToProps, { getPostById })(DisplayPostContainer);
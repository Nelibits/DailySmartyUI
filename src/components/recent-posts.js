import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Post from './post';

import { Field, reduxForm} from 'redux-form';

class RecentPosts extends Component {

  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  renderPosts = function() {
    const posts = this.props.recentPosts.map((post, index) => {
        if(index < 3) {
            return (
              <Post {...post} key={index}/>
            )   
        }
    })
    return posts
}

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts_wrapper">
            <div className="recent-posts_heading">
                Recent Posts
            </div>
            <ul className="recent-posts_posts">
            {this.renderPosts()}
            </ul>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      recentPosts: state.posts.recentPosts
  }
}

export default connect(mapStateToProps, actions)(RecentPosts);


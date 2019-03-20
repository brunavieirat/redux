import React, { Component } from "react";
import { connect } from "react-redux";
import { handleComments } from "../actions/comments";
import { loadpost } from "../actions/posts";
import { MdAssignment } from "react-icons/md";
import Post from "./Post";

class PostDetails extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { teste } = this.props.location.state;
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="pageTitle">
          <h1>Post</h1>
          <MdAssignment className="icon-post" />
        </div>
        <div className="postlist">
          <Post post={teste} />
        </div>
      </React.Fragment>
    );
  }
}



export default connect()(PostDetails);


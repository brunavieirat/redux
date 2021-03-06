import React from "react"; 
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { createpost } from "../actions/posts";


const AddPost = props => {
  console.log('add', props)
  return (
  
    <div>
      <h1 className="pageTitle">Adiciona Posts</h1>
      <PostForm 
        onSubmit={newpost => {
          props.dispatch(createpost(newpost));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddPost);

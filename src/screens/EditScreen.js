import React, { useContext } from "react";
import { Context as BlogContext } from "../context/BlogContext";
import BlogForm from "./components/BlogForm";

export default ({ navigation }) => {
  const id = +navigation.getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);
  const post = state.find(item => +item.id === +id);

  return (
    <BlogForm
      initialValues={post}
      onSubmit={({ id, title, content }) => {
        editBlogPost({ id, title, content }, () => navigation.pop());
      }}
    />
  );
};

import React, { useContext } from "react";
import { Context as BlogContext } from "../context/BlogContext";
import BlogForm from "./components/BlogForm";

export default ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogForm
      onSubmit={({ title, content }) => {
        addBlogPost({ title, content }, () => navigation.navigate("Index"));
      }}
    />
  );
};

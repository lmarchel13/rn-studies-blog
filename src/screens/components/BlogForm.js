import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15
  }
});

const BlogForm = ({ onSubmit, initialValues }) => {
  const { id } = initialValues;
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Enter title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={title => setTitle(title)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.labelStyle}>Enter content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={content => setContent(content)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Save Post"
        onPress={() => onSubmit({ id, title, content })}
      ></Button>
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
};

export default BlogForm;

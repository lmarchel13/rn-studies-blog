import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";

const styles = StyleSheet.create({
  editIcon: {
    fontSize: 30
  }
});

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam("id");

  const blogPost = state.find(post => +post.id === +id);

  return (
    <View>
      <Text>Title: {blogPost.title}</Text>
      <Text>Content: {blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");

  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id });
        }}
      >
        <EvilIcons name="pencil" style={styles.editIcon}></EvilIcons>
      </TouchableOpacity>
    )
  };
};

export default ShowScreen;

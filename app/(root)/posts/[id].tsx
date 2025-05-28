import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const PostDetail = () => {
  const { post } = useLocalSearchParams<{ post?: string }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Post Detail",
    });
  }, [navigation]);

  if (!post) {
    return (
      <View style={styles.center}>
        <Text>Post data not available.</Text>
      </View>
    );
  }

  const postData = JSON.parse(post);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../../assets/images/dummy-post.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{postData.title}</Text>
      <Text style={styles.body}>{postData.body}</Text>
    </ScrollView>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#070F2B",
  },
  body: {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});

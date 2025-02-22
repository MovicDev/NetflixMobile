import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const FirstSlide = () => {
  return (
    <View>
      <Text>FirstSlide</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => router.push("/forms/signinPage")}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstSlide;

const styles = StyleSheet.create({});

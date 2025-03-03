import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({onComplete }) => {
  const slides = [
    {
      title: "How do I watch?",
      description:
        "Members that subscribe to Netflix can watch here in the app.",
    },
    {
      title: "Watch everywhere",
      description: "Stream on your phone, tablet, laptop and TV.",
    },
    {
      title: "There a plan for every fan",
      description: "Small price. Big entertainment",
    },
    {
      title: "Cancel online anytime",
      description: "Join today, no reason to wait",
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.backgroundImage}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            top: 30,
            zIndex: 1,
          }}
        >
          <Image
            source={require("../../assets/images/splashIcon.png")}
            style={{ height: 50, right:30, transform: [{ scale: 0.5 }] }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: "white",
                marginHorizontal: 10,
                fontWeight: "bold",
                top:15,
              }}
            >
              Privacy
            </Text>
            <Text
              style={{
                color: "white",
                marginHorizontal: 10,
                fontWeight: "bold",
                top:15,
              }}
            >
              Help
            </Text>
          </View>
        </View>
        <View style={styles.overlay} />

        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          loop={false}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          ))}
        </Swiper>
        <TouchableOpacity onPress={onComplete}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              margin: 10,
              backgroundColor: "red",
              padding: 20,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.61)",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    top: 90,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "red",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

export default OnboardingScreen;

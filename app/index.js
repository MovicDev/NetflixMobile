import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "./(unboarding)/OnboardingScreen";
import SigninPage from "../components/Form/SigninPage";
const letters = ["N", "E", "T", "F", "L", "I", "X"];

export default function Page() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingCompleted, setOnboardingCompleted] = useState(null); // Track if onboarding is completed

  const animatedValues = useRef(letters.map((_, index) => new Animated.Value(index === 0 ? 1 : 0))).current;

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await AsyncStorage.getItem("onboardingCompleted");
      setOnboardingCompleted(completed !== null);
    };

    checkOnboarding();
  }, []);

  useEffect(() => {
    if (onboardingCompleted === null) return; // Prevent animation flicker before checking storage

    const animations = letters.map((_, index) =>
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 600,
        delay: index * 200,
        useNativeDriver: true,
      })
    );

    Animated.sequence([
      Animated.stagger(100, animations),
      Animated.delay(1000),
      Animated.timing(animatedValues[0], {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => setShowOnboarding(true));

  }, [onboardingCompleted]);

  if (onboardingCompleted === null) {
    return null; // Prevent rendering before AsyncStorage is checked
  }

  return (
    <View style={styles.container}>
      {!showOnboarding ? (
        <View style={styles.loaderContainer}>
          {letters.map((letter, index) => (
            <Animated.Text
              key={index}
              style={[
                styles.text,
                {
                  opacity: animatedValues[index],
                  transform: [
                    {
                      scale: animatedValues[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                      }),
                    },
                  ],
                },
              ]}
            >
              {letter}
            </Animated.Text>
          ))}
        </View>
      ) : onboardingCompleted ? (
        <SigninPage />  
      ) : (
        <OnboardingScreen onComplete={async () => {
          await AsyncStorage.setItem("onboardingCompleted", "true");
          setOnboardingCompleted(true);
        }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  loaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#E50914",
    marginHorizontal: 5,
  },
});


import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import splashIcon from "../../../assets/images/splashIcon.png";
import { router } from "expo-router";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const signupPage = () => {
 

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const userData = {
        firstName,
        email,
        password,
      };
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      router.push("/(pages)/forms/signinPage");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" barStyle="light-content" />
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <Image
            source={splashIcon}
            style={{ height: 40, width: 100, bottom: 10 }}
            resizeMode="contain"
          />
          <Text style={{ color: "#fff", fontSize: 50 }}>Sign Up</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={styles.Input}
            placeholder="Email or Phone Number"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.Input}
            placeholder="First name"
            placeholderTextColor="gray"
            value={firstName}
            onChangeText={setFirstName}
          />
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.Input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setisPasswordVisible(!isPasswordVisible)}
              style={{ position: "absolute", right: 20, top: 35 }}
            >
              <Text style={{ color: "gray" }}>
                {isPasswordVisible ? "HIDE" : "SHOW"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              padding: 17,
              margin: 10,
              borderRadius: 5,
            }}
            onPress={handleSubmit}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          ></View>
          <Text style={{ color: "gray", margin: 10, position: "relative" }}>
            Already a user?
            <TouchableOpacity
              style={{ top: 10 }}
              onPress={() => router.push("/forms/signinPage")}
            >
              <Text style={{ color: "white", top: 4 }}> Sign in now.</Text>
            </TouchableOpacity>
          </Text>
          <Text style={{ color: "gray", margin: 10, position: "relative" }}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <TouchableOpacity style={{ top: 10 }}>
              <Text style={{ color: "blue", top: 4 }}>Learn more</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default signupPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    height: 100,
  },
  Input: {
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "#222",
    padding: 20,
    margin: 10,
    fontSize: 20,
    color: "white",
    placeholderTextColor: "gray",
  },
});

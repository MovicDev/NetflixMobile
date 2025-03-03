import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import movic from "../../assets/images/movic.png";
import codify from "../../assets/images/codify.png";
import nonna from "../../assets/images/nonna.png";
import movicdev from "../../assets/images/movicdev.png";
import addProfile from "../../assets/images/addProfile.png";
import dot from "../../assets/images/dot.png";
import { Ionicons } from "@expo/vector-icons";

const menu = () => {
  const logout = async () => {
    await AsyncStorage.removeItem("onboardingCompleted");
    router.push("OnboardingScreen");
  };
  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 20,
          
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            padding: 20,
            gap:10
          }}
        >
          <TouchableOpacity onPress={() => router.push("/(tabs)")}>
            <View style={styles.imageWrapper}>
              <Image source={movic} style={styles.image} resizeMode="contain" />
              <Text style={styles.imageText}>Movic</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)")}>
            <View style={styles.imageWrapper}>
              <Image
                source={codify}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.imageText}>codify</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)")}>
            <View style={styles.imageWrapper}>
              <Image source={nonna} style={styles.image} resizeMode="contain" />
              <Text style={styles.imageText}>nonna</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)")}>
            <View style={styles.imageWrapper}>
              <Image
                source={movicdev}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.imageText}>Movicdev</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)")}>
            <View style={styles.imageWrapper}>
              <Image
                source={addProfile}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.imageText}>.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Ionicons name="create-outline" style={{ fontSize: 20 }} /> Manage
          profile
        </Text>
        <View
          style={{
            backgroundColor: "#333",
            padding: 15,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              marginLeft: 20,
            }}
          >
           <Image source={dot}/> Tell friends about Netflix.
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nisi?
            Laboriosam deserunt est sit numquam dolor, ipsa quis, necessitatibus
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 40,
              marginLeft: 20,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            <Ionicons
              name="checkmark"
              style={{ 
                fontSize: 40,
                color: "#fff", 
                fontWeight: "bold"
               }}
            />
            List
          </Text>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            padding:10,
            marginLeft: 20,
          }}
        >
          <Text style={styles.settings}>App Settings</Text>
          <Text style={styles.settings}>Account</Text>
          <Text style={styles.settings}>Help</Text>
          <View style={{alignItems:'flex-start'}}>
            <Button
              onPress={logout}
              title="Sign Out"
              color="#fff"
              accessibilityLabel="Logout"
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default menu;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    flex: 1,
    color: "#fff",
    height: "100%",
  },
  imageWrapper: {
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  imageText: {
    color: "white",
    marginTop: 10,
  },
  settings: {
    color: "#fff",
    fontSize: 20,
    padding: 10,
  },
});

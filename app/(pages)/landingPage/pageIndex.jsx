import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import splashIcon from "../../../assets/images/splashIcon.png";
import movic from "../../../assets/images/movic.png";
import nonna from "../../../assets/images/nonna.png";
import codify from "../../../assets/images/codify.png";
import movicdev from "../../../assets/images/movicdev.png";
import add from "../../../assets/images/add.png";
import { router } from "expo-router";
const pageIndex = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" barStyle="light-content" />
      <SafeAreaView>
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}>
        <Image
          source={splashIcon}
          style={{ height: 40, width: 100 }}
          resizeMode="contain"
        />
        </View>
        <View
          style={styles.imageContainer}
        >
            <TouchableOpacity onPress={()=> router.push('/(tabs)')}>
            <View style={styles.imageWrapper}>
            <Image
              source={movic}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.imageText}>
              Movic
            </Text>
          </View>
            </TouchableOpacity>
            <TouchableOpacity>
      <View style={styles.imageWrapper}>
            <Image
              source={nonna}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.imageText}>
              Nonna
            </Text>
          </View>
            </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
          <View style={styles.imageWrapper}>
            <Image
              source={codify}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.imageText}>
              codify
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.imageWrapper}>
            <Image
              source={movicdev}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.imageText}>
             movicdev
            </Text>
          </View>
          <TouchableOpacity>

          </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
          <View style={styles.imageWrapper}>
            <Image
              source={add}
              style={styles.imagee}
              resizeMode="contain"
            />
            <Text style={styles.imageTextt}>
             Add profile
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default pageIndex;

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    height: 100,
    width: "100%",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5, 
    margin: 5,  
  },
  imageWrapper: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  imagee: {
    height: 70,
    width: 70,
    right: 70,
    top:10
  },
  imageText: {
    color: 'white',
    marginTop: 10,
  },
  imageTextt: {
    color: 'white',
    marginTop: 12,
    marginRight:140
  },
});

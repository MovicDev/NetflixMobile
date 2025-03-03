import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import homeScreen from "../../assets/images/homeScreen.png";
import pre1 from "../../assets/images/pre1.png";
import pre2 from "../../assets/images/pre2.png";
import pre3 from "../../assets/images/pre3.png";
import nig from "../../assets/images/nig.png";
import chi from "../../assets/images/chi.png";
import vor from "../../assets/images/vor.png";
import bee from "../../assets/images/bee.png";
import luc from "../../assets/images/luc.png";
import bar from "../../assets/images/bar.png";
import plus from "../../assets/images/plus.png";
import info from "../../assets/images/info.png";
import { Ionicons } from "@expo/vector-icons";
import Pros from "../../components/MainPagePros/Pros";
const index = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground source={homeScreen} style={styles.background}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              paddingTop: 50,
            }}
          >
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ color: "#fff", fontSize: 25, paddingTop: 10 }}>
              TV Shows
            </Text>
            <Text style={{ color: "#fff", fontSize: 25, paddingTop: 10 }}>
              Movies
            </Text>
            <Text style={{ color: "#fff", fontSize: 25, paddingTop: 10 }}>
              My List
            </Text>
          </View>
        </ImageBackground>
        <View>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
            ##2 in Nigeria Today
          </Text>
        </View>
        <View
          style={{
            padding: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Image
              source={plus}
              style={{
                width: 25,
                height: 25,
                alignSelf: "center",
              }}
            />
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              My List
            </Text>
          </View>
          <Text
            style={{
              backgroundColor: "gray",
              color: "#000",
              textAlign: "center",
              fontSize: 40,
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Ionicons
              name="play"
              style={{
                width: 100,
                height: 100,
                fontSize: 40,
                top: 10,
                color: "black",
              }}
            />{" "}
            Play
          </Text>
          <View>
            <Image
              source={info}
              style={{ width: 25, height: 25, alignSelf: "center", }}
            />
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              Info
            </Text>
          </View>
        </View>
        <View style={{ paddingStart: 10 }}>
          <Text style={{ color: "#fff", fontSize: 40, paddingBottom: 10 }}>
            Previews
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 10 }}
          >
            <Image
              source={pre1}
              style={{
                width: 100,
                height: 100,
                borderRadius: 75,
                marginRight: 10,
              }}
            />
            <Image
              source={pre2}
              style={{
                width: 100,
                height: 100,
                borderRadius: 75,
                marginRight: 10,
              }}
            />
            <Image
              source={pre3}
              style={{
                width: 100,
                height: 100,
                borderRadius: 75,
                marginRight: 10,
              }}
            />
            <Image
              source={homeScreen}
              style={{
                width: 100,
                height: 100,
                borderRadius: 75,
                marginRight: 10,
              }}
            />
          </ScrollView>
          <Text style={{ color: "#fff", fontSize: 20, paddingBottom: 10 }}>
            Continue Watching for Emenalo
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 10 }}
          >
            <Image source={chi} style={{ marginRight: 10 }} />
            <Image source={vor} style={{ marginRight: 10 }} />
            <Image source={nig} style={{ marginRight: 10 }} />
            <Image source={chi} style={{ marginRight: 10 }} />
          </ScrollView>
          <Pros
            title="Popular on Netflix"
            image1={bee}
            image2={luc}
            image3={bar}
            image4={bee}
          />
          <Pros
            title="Trending Now"
            image1={bee}
            image2={luc}
            image3={bar}
            image4={bee}
          />
          <Pros
            title="Top 10 in Nigeria Today"
            image1={bee}
            image3={bar}
            image2={luc}
            image4={bee}
          />
          <Pros
            title="My List"
            image1={bee}
            image3={bar}
            image2={luc}
            image4={bee}
          />
          <Pros
            title="Anfrican Movies"
            image1={bee}
            image3={bar}
            image4={bee}
            image2={luc}
          />
          <Pros
            title="Nolloywood Movies & TV"
            image1={bee}
            image3={bar}
            image4={bee}
            image2={luc}
          />
          <Pros
            title="Watch It Again"
            image1={bee}
            image3={bar}
            image4={bee}
            image2={luc}
          />
          <Pros
            title="New Relases"
            image1={bee}
            image3={bar}
            image4={bee}
            image2={luc}
          />
          <Pros
            title="TV Thrillers & Mysteries"
            image1={bee}
            image3={bar}
            image4={bee}
            image2={luc}
          />
          <Pros
            title="US TV Shows"
            image1={bee}
            image3={bar}
            image4={bee}
            image2={luc}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  background: {
    height: 500,
    width: "100%",
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    flex: 1,
    color: "#fff",
    height: 100,
    width: "100%",
  },
});

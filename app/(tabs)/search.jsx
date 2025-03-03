import {
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import search2 from "../../assets/images/search2.png";
  import playy from "../../assets/images/playy.png";
  import oloture from "../../assets/images/oloture.png";
  import setup from "../../assets/images/setup.png";
  import exam from "../../assets/images/exam.png";
  import bad from "../../assets/images/bad.png";
  import gov from "../../assets/images/gov.png";
  import oza from "../../assets/images/oza.png";
  import React from "react";
  
  const search = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={{ paddingTop: 20 }}>
          <TextInput
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#333",
              color: "#fff",
              padding: 15,
              marginTop: 10,
              fontSize: 20,
            }}
            placeholder="Search for a show,movie,genre,e.t.c"
            placeholderTextColor={"gray"}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              padding: 20,
            }}
          >
            Top Searches
          </Text>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={search2} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              Citation
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={oloture} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              Oloture
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={setup} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              The setup
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={bad} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              Breaking Bad
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={oza} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              Ozark
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={gov} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              The Governor
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
                 <Image source={exam} />
            <Text style={{ color: "#fff", fontSize: 20, padding: 20}}>
              Your Excellency
            </Text>
            <TouchableOpacity>
            <Image source={playy} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default search;
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#000",
      flex: 1,
      color: "#fff",
      height: 100,
      width: "100%",
    },
  });
  
  //
  // import {
  //   Platform,
  //   ScrollView,
  //   StatusBar,
  //   StyleSheet,
  //   Text,
  //   TextInput,
  //   View,
  //   Button,
  // } from "react-native";
  // import React, { useState } from "react";
  
  // const Search = () => {
  //   const [query, setQuery] = useState("");
  //   const [results, setResults] = useState([]);
  
  //   const handleSearch = () => {
  //     console.log("Searching for:", query);
  //   };
  
  //   return (
  //     <ScrollView style={styles.container}>
  //       <View style={{ padding: 20 }}>
  //         <TextInput
  //           style={{
  //             width: "100%",
  //             height: 40,
  //             backgroundColor: "#333",
  //             color: "#fff",
  //             padding: 15,
  //             marginTop: 10,
  //           }}
  //           placeholder="Search..."
  //           placeholderTextColor="#888"
  //           value={query}
  //           onChangeText={setQuery}
  //         />
  //         <Button title="Search" onPress={handleSearch} />
  //         <View style={{ marginTop: 20 }}>
  //           {results.map((result, index) => (
  //             <Text key={index} style={{ color: "#fff" }}>
  //               {result}
  //             </Text>
  //           ))}
  //         </View>
  //       </View>
  //     </ScrollView>
  //   );
  // };
  
  // export default Search;
  
  // const styles = StyleSheet.create({
  //   container: {
  //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //     backgroundColor: "#000",
  //     flex: 1,
  //     color: "#fff",
  //     height: 100,
  //     width: "100%",
  //   },
  // });
  
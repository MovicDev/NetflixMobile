// import {
//     Image,
//     Platform,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     CheckBox,
//     Alert,
//   } from "react-native";
//   import React, { useState } from "react";
//   import { router } from "expo-router";
//   import splashIcon from "../../assets/images/splashIcon.png";
//   import { StatusBar } from "expo-status-bar";
// import AsyncStorage from "@react-native-async-storage/async-storage";
  
//   const signinPage = () => {
    
//     const [isPasswordVisible, setisPasswordVisible] = useState(false);
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [rememberMe, setRememberMe] = useState(false);

//     const handleLogin = async () => {
//       try {
//         const storedData = await AsyncStorage.getItem("userData");
//         if (!storedData) {
//           Alert.alert("Error", "No user data found. Please sign up first.");
//           return;
//         }
//         const userData = JSON.parse(storedData);
//         if (email === userData.email && password === userData.password) {
//           router.push("/landingPage/pageIndex"); 
//         } else {
//           Alert.alert("Error", "Invalid email or password.");
//         }
//       } catch (error) {
//         Alert.alert("Error", `Failed to login: ${error.message}`);
//       }
//     };
//     return (
//       <View style={styles.container}>
//           <StatusBar style="light"  barStyle="light-content"/>
//         <SafeAreaView>
//           <View style={{ padding: 20 }}>
//             <Image
//               source={splashIcon}
//               style={{ height: 40, width: 100, bottom: 70 }}
//               resizeMode="contain"
//             />
//             <Text style={{ color: "#fff", fontSize: 50, bottom: 50 }}>
//               Sign In
//             </Text>
//           </View>
//           <View style={{ padding: 10 }}>
//             <TextInput
//               style={styles.Input}
//               placeholder="Email or Phone Number"
//               placeholderTextColor="gray"
//               value={email}
//               onChange={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             <View style={{ position: "relative" }}>
//               <TextInput
//                 style={styles.Input}
//                 placeholder="Password"
//                 placeholderTextColor="gray"
//                 secureTextEntry={!isPasswordVisible}
//                 value={password}
//                 onChangeText={setPassword}
//               />
//               <TouchableOpacity
//                 onPress={() => setisPasswordVisible(!isPasswordVisible)}
//                 style={{ position: "absolute", right: 20, top: 35 }}
//               >
//                 <Text style={{ color: "gray" }}>
//                   {isPasswordVisible ? "HIDE" : "SHOW"}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "red",
//                 padding: 17,
//                 margin: 10,
//                 borderRadius: 5,
//               }}
//               onPress={handleLogin}
//               // onPress={()=>router.push("/landingPage/pageIndex")}
//             >
//               <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
//                 Sign In
//               </Text>
//             </TouchableOpacity>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingLeft: 10,
//                 paddingRight: 10,
//               }}
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <TextInput
//                   style={{
//                     width: 15,
//                     height: 15,
//                     backgroundColor: "gray",
//                     marginRight: 10,
//                   }}
//                 />
//                 <Text style={{ color: "white" }}>Remember me</Text>
//               </View>
//               <Text
//                 style={{
//                   color: "white",
//                   textAlign: "center",
//                   fontSize: 16,
//                 }}
//               >
//                 Need help?
//               </Text>
//             </View>
//             <TouchableOpacity>
//               <Text style={{ color: "gray", fontSize: 18, margin: 10 }}>
//                 Login with Facebook
//               </Text>
//             </TouchableOpacity>
//             <Text style={{ color: "gray", margin: 10,position:'relative' }}>
//               New to Netflix?
//               <TouchableOpacity style={{top:10}} onPress={() => router.push("/forms/signupPage")}>
//                 <Text style={{ color: "white",top:4}}> Sign up now.</Text>
//               </TouchableOpacity>
//             </Text>
//             <Text style={{ color: "gray", margin: 10,position:'relative' }}>
//               This page is protected by Google reCAPTCHA to ensure you're not a
//               bot.
//               <TouchableOpacity style={{top:10}}>
//                 <Text style={{ color: "blue",top:4}}>Learn more</Text>
//               </TouchableOpacity>
//             </Text>
//           </View>
//         </SafeAreaView>
//       </View>
//     );
//   };
  
//   export default signinPage;
  
//   export const styles = StyleSheet.create({
//     container: {
//       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//       backgroundColor: "#000",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       color: "#fff",
//       height: 100,
//     },
//     Input: {
//       backgroundColor: "#333",
//       borderWidth: 1,
//       borderColor: "#222",
//       padding: 20,
//       margin: 10,
//       fontSize: 20,
//       color: "white",
//       placeholderTextColor: "gray",
//     },
//   });
  
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import splashIcon from "../../assets/images/splashIcon.png";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInPage = () => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem("userData");
      if (!storedData) {
        Alert.alert("Error", "No user data found. Please sign up first.");
      }
      const userData = JSON.parse(storedData);
      console.log("User Data:", userData); 
      if (email === userData.email && password === userData.password) {
        router.push("/landingPage/pageIndex");
      } else {
        Alert.alert("Error", "Invalid email or password.");
      }
    } catch (error) {
      Alert.alert("Error", `Failed to login: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" barStyle="light-content" />
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <Image
            source={splashIcon}
            style={{ height: 40, width: 100, bottom: 70 }}
            resizeMode="contain"
          />
          <Text style={{ color: "#fff", fontSize: 50, bottom: 50 }}>Sign In</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={styles.Input}
            placeholder="Email or Phone Number"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail} 
            keyboardType="email-address"
            autoCapitalize="none"
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
            onPress={handleLogin}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Sign In
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
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: rememberMe ? "blue" : "gray",
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
                onPress={() => setRememberMe(!rememberMe)}
              />
              <Text style={{ color: "white" }}>Remember me</Text>
            </View>
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Need help?
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 18, margin: 10 }}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "gray", margin: 10, position: "relative" }}>
            New to Netflix?
            <TouchableOpacity
              style={{ top: 10 }}
              onPress={() => router.push("/forms/signupPage")}
            >
              <Text style={{ color: "white", top: 4 }}> Sign up now.</Text>
            </TouchableOpacity>
          </Text>
          <Text style={{ color: "gray", margin: 10, position: "relative" }}>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <TouchableOpacity style={{ top: 10 }}>
              <Text style={{ color: "blue", top: 4 }}>Learn more</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignInPage;

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
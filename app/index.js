import { StyleSheet, Text, View } from "react-native";
import FirstSlide from "../components/Slide/FirstSlide";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FirstSlide />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color:'#fff'
  },
  main: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});

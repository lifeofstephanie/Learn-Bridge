import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const FireStreak = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/fire.json")}
        autoPlay
        loop
        style={styles.fireAnimation}
      />
      <Text style={styles.number}>7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin:'auto',
    marginTop:30
    // display:"flex"
  },
  fireAnimation: {
    width: 100,
    height: 100,
  },
  number: {
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    top:40
  },
});

export default FireStreak;

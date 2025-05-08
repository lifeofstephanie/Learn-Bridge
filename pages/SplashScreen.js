import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding"); // Navigate after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo2.png")} style={styles.logo} />
      <Text style={styles.text}>LEARN BRIDGE</Text>
      {/* <Text style={styles.subText}>VENEER</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF3E3", // Light beige background
  },
  logo: {
    width: 220,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#E07A33", // Orange text color
    letterSpacing: 2,
  },
});

export default SplashScreen;

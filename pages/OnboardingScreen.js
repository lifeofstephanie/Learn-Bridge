import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/logo2.png";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image source={require("../assets/services.jpg")} style={styles.image} />

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Your <Text style={styles.highlight}>Personal Learning</Text>{" "}
          Application
        </Text>
        <Text style={styles.subtitle}>
          Learn at your own pace and improve your skills
        </Text>

        {/* Start Now Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "55%",
    resizeMode: "cover",
    marginBottom:30,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  content: { alignItems: "center", paddingHorizontal: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: { color: "orange" },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  // signInText: { marginTop: 20, fontSize: 14, color: "#666" },
  // signInLink: { color: "#007bff", fontWeight: "bold" },
});
export default OnboardingScreen;

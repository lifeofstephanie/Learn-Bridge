import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import logo from '../assets/logo2.png'
import { Image } from "react-native";
import { loginUser } from "../backend/auth";

// import { loginUser } from "../backend/userService";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password!");
      return;
    }
    const result = await loginUser(email, password);
    if (result.success) {
      Alert.alert("Success", `Welcome, ${result.user.name}!`);
      navigation.navigate("LearnBridge"); // Navigate to home page after login
    } else {
      Alert.alert("Error", result.message);
    }

    // loginUser(email, password, (users) => {
    //   if (users.length > 0) {
    //     Alert.alert("Success", "Login successful!");
    //     navigation.navigate("Home"); // Redirect to Home
    //   } else {
    //     Alert.alert("Error", "Invalid credentials! Please try again.");
    //   }
    // });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
        Don't have an account? Sign Up
      </Text>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    paddingTop: 90,
    // backgroundColor:'white'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color:'#5E5E5E'
    // textAlign: "center",
  },
  input: {
    // borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    height:60,
    elevation:8,
    backgroundColor:"white"
    // boxShadow:''
  },
  link: {
    color: "orange",
    marginTop: 10,
    textAlign: "center",
  },
  info: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 15,
  },
  image: {
    width: 70,
    // height:70,
    marginHorizontal: "auto",
    marginBottom: 0,
    resizeMode: "contain",
  },
  button:{
    height:50,
    backgroundColor:'orange',
    marginTop:30,
    elevation:8,
    borderRadius:5,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    // width:150,
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  }
});


export default LoginScreen;

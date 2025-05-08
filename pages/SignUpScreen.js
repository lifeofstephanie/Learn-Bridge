import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import logo from "../assets/logo2.png";import { Ionicons } from '@expo/vector-icons';
// import { createUserTable, registerUser } from "../backend/database";
import { registerUser } from "../backend/auth";
// import { registerUser } from "../backend/userService";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(()=>{
  //   createUserTable()
  // })

  const handleSignup = async() => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    } 
    const result = await registerUser(name, email, password);
    Alert.alert(result.success ? "Success" : "Error", result.message);
    
    if (result.success) {
      navigation.navigate("Login"); // Navigate to login page after signup
    }


    // registerUser(name, email, password, (success) => {
    //   if (success) {
    //     Alert.alert("Success", "Account created successfully!");
    //     navigation.navigate("Login");
    //   } else {
    //     Alert.alert("Error", "Signup failed. Email might already be in use.");
    //   }
    // });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Create Your Account</Text>
      {/* <Text style={styles.info}>
        Enter Your Information to get started with your learning journey
      </Text> */}
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email Address"
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
      <TouchableOpacity  onPress={handleSignup} style={styles.button}> 
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {/* <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
        Already have an account? Log in
      </Text> */}
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
    color: "blue",
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
  backButton: { 
    position: 'absolute', 
    top: 80, 
    left: 20 
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

export default SignupScreen;

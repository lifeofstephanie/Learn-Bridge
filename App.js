import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Image, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./components/navigation";
import PdfViewer from "./components/ArticleViewer";
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import SplashScreen from "./pages/SplashScreen";
import OnboardingScreen from "./pages/OnboardingScreen";
import HomeScreen from "./pages/HomeScreen";
import logo from "./assets/logo2.png";

export default function App (){
  const Stack = createStackNavigator()
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="LearnBridge"
            component={BottomTabNavigator}
            options={{
              headerShown: true,
              headerTitle: () => (
                <View style={styles.headerContainer}>
                  <Image source={logo} style={styles.logo} />
                  <Text style={styles.headerTitleText}>LearnBridge</Text>
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

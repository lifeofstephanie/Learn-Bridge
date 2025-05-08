import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../pages/HomeScreen';
import Library from '../pages/Library';
import Profile from '../pages/Profile';
import Explore from '../pages/Explore';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../assets/logo2.png'

// Import Screens
// import HomeScreen from './/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          // } else if (route.name === 'Notification') {
          //   iconName = 'notifications-outline';
          }else if(route.name === 'Library'){
            iconName='book-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white', height: 60 },
        headerShown:false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={Library} />
      {/* <Tab.Screen name="Notification" component={Explore} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 10,
    //   resizeMode:"contain"
    },
    headerTitleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '', 
    },
  });
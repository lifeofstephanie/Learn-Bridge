import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import profileImage from "../assets/profile.jpg";
import FireStreak from "../components/fire";
import { ongoingCourses } from "../data/OnGoingCourses";
import { Divider, ProgressBar } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { logoutUser } from "../backend/auth";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const ProfileHeader = ({ user }) => (
  <View style={styles.headerContainer}>
    <Image source={profileImage} style={styles.avatar} />
    <Text style={styles.name}>{user?.name || "Jane Doe"}</Text>
    <Text style={styles.role}>Learning enthusiast</Text>
    <View style={styles.level}>
      <Ionicons name="school-outline" size={16} />
      <Text style={{ marginLeft: 10 }}>Intermediate Level</Text>
    </View>
  </View>
);

const Achievements = () => (
  <ScrollView style={styles.contentContainer}>
    <Text style={styles.sectionTitle}>Your Badges</Text>
    <View style={styles.badgeContainer}>
      <View style={styles.badgeItem}>
        <FontAwesome5 name="award" size={24} color="gold" />
        <Text style={styles.badgeText}>Fast Learner</Text>
        <Text style={styles.badgeSubtext}>Completed 3 lessons in one day</Text>
      </View>
      <View style={styles.badgeItem}>
        <FontAwesome5 name="trophy" size={24} color="black" />
        <Text style={styles.badgeText}>Quiz Master</Text>
        <Text style={styles.badgeSubtext}>Scored 100% on 5 quizzes</Text>
      </View>
      <View style={styles.badgeItem}>
        <MaterialIcons name="menu-book" size={24} color="green" />
        <Text style={styles.badgeText}>Bookworm</Text>
        <Text style={styles.badgeSubtext}>Read all course materials</Text>
      </View>
      <View style={styles.badgeItem}>
        <FontAwesome5 name="award" size={24} color="gray" />
        <Text style={styles.badgeText}>Fast Learner</Text>
        <Text style={styles.badgeSubtext}>Completed 3 lessons in one day</Text>
      </View>
      <View style={styles.badgeItem}>
        <FontAwesome5 name="trophy" size={24} color="gray" />
        <Text style={styles.badgeText}>Quiz Master</Text>
        <Text style={styles.badgeSubtext}>Scored 100% on 5 quizzes</Text>
      </View>
      <View style={styles.badgeItem}>
        <MaterialIcons name="menu-book" size={24} color="gray" />
        <Text style={styles.badgeText}>Bookworm</Text>
        <Text style={styles.badgeSubtext}>Read all course materials</Text>
      </View>
    </View>
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Learning Streak</Text>
      <Text style={{ fontSize: 16, color: "gray" }}>
        Your Consistency Pays Off
      </Text>
      <FireStreak />
      <Text style={{ color: "gray", fontSize: 16, textAlign: "center" }}>
        Previous Streak Count: 12 days
      </Text>
    </View>
  </ScrollView>
);

const Settings = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    const result = await logoutUser();
    if (result.success) {
      navigation.replace('Login'); 
    } else {
      console.error('Failed to log out');
    }
  };
  return(
  <ScrollView style={styles.contentContainer}>
    <TouchableOpacity style={styles.settingItem}>
      <Text>Account Information</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.settingItem}>
      <Text>Learning Preferences</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.settingItem}>
      <Text>Notifications</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.settingItem}>
      <Text>App Settings</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.settingItem}>
      <Text>Help & Support</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
      <Text style={{ color: "red" }}>Sign Out</Text>
    </TouchableOpacity>
  </ScrollView>
  )
};

const Progress = () => (
  <ScrollView>
    <View style={[tw`p-3 pt-8 bg-white m-2 pb-6 rounded-md`, { elevation: 1 }]}>
      <Text style={[tw`text-lg font-bold`]}>Current Courses</Text>
      <Text style={tw`text-gray-500`}>Your active learning journeys</Text>
      <View style={tw`pt-4 `}>
        {ongoingCourses.map((course) => (
          <View key={course.id} style={tw`mb-4`}>
            <View style={tw`flex-row justify-between items-center mb-4`}>
              <View style={tw`flex-row items-center`}>
                <Ionicons name="book-outline" size={24} color="orange" />
                <Text style={[tw`ml-2 font-medium`, { fontSize: 16 }]}>
                  {course.title}
                </Text>
              </View>
              <Text>{course.progress}%</Text>
            </View>
            <ProgressBar
              progress={course.progress / 100}
              color={"#000"}
              style={{ height: 5, borderRadius: 5 }}
            />
            <View style={tw`flex-row justify-between items-center mt-1`}>
              <Text>Last Activity: {course.activity}</Text>
              <TouchableOpacity style={tw`flex-row items-center mb-3`}>
                <Text style={[tw`text-gray-500`, { fontSize: 14 }]}>
                  Continue
                </Text>
                <Ionicons name="chevron-forward" size={14} color={"gray"} />
              </TouchableOpacity>
            </View>
            <Divider />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text>View All Courses</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
const Profile = () => (
  <>
    <ProfileHeader />
    <Tab.Navigator>
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Achievements" component={Achievements} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </>
);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: "bold" },
  role: { fontSize: 14, color: "gray" },
  level: { fontSize: 14, color: "black", marginTop: 5 },
  contentContainer: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  badgeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor:'white',
    padding:10,
    paddingTop:30,


  },
  badgeItem: { alignItems: "center", width: "30%", marginBottom: 20 },
  badgeText: { fontWeight: "bold", textAlign: "center" },
  badgeSubtext: { fontSize: 12, textAlign: "center", color: "gray" },
  settingItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  signOutButton: { padding: 15, alignItems: "center", marginTop: 20 },
  card: {
    borderWidth: 0,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    elevation: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  viewAllButton: {
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 1,
    width: 250,
  },
});

export default Profile;

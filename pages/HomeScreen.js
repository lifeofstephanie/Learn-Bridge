import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Menu, Divider, ProgressBar, Provider } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import LikeButton from "../components/LikeButton";
import { ongoingCourses } from "../data/OnGoingCourses";

const featuredCourses = [
  {
    id: "1",
    title: "Math",
    lessons: "12 lessons",
    color: "#FF9F1C",
    image: require("../assets/calculator.png"),
  },
  {
    id: "2",
    title: "Science",
    lessons: "16 lessons",
    color: "#3D5AFE",
    image: require("../assets/calculator.png"),
  },
  {
    id: "3",
    title: "Language",
    lessons: "9 lessons",
    color: "#8E24AA",
    image: require("../assets/calculator.png"),
  },
];



export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [visible, setVisible] = useState(false);

  const openMenu = (id) => {
    setSelectedCourse(id);
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulates a data fetch delay
  };

  return (
    <Provider>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search courses" style={styles.searchInput} />
          <Feather name="sliders" size={20} color="gray" />
        </View>

        {/* Filters */}
        <View style={styles.filterContainer}>
          <Text>Recent</Text>
          <View style={styles.filterButtonContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Design</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Economy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Art</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Courses */}
        <View style={tw`flex-row justify-between`}>
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        <Text style={tw`text-blue-600 font-bold`}>See All</Text>
      </View>
      <FlatList
        data={featuredCourses}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.featuredCourseCard,
              { backgroundColor: item.color, marginBottom: 15 },
            ]}
          >
            <View style={tw`flex-row justify-between`}>
              <Text style={styles.featuredCourseTitle}>{item.title}</Text>
              <LikeButton />
            </View>
            <Text style={styles.featuredCourseLessons}>{item.lessons}</Text>
            <Image source={item.image} style={tw`w-12 h-12 contain ml-auto`} />
          </View>
        )}
      />

        {/* Ongoing Courses */}
        <Text style={styles.sectionTitle}>Ongoing</Text>
        {ongoingCourses.map((course) => (
          <View key={course.id} style={styles.ongoingCourseCard}>
            <Image source={course.image} style={tw`w-12 h-12 `} />
            <View style={tw`flex-1 ml-5`}>
              <View>
                <View style={tw`flex-row justify-between`}>
                  <Text style={styles.ongoingCourseTitle}>{course.title}</Text>
                  <Menu
                    visible={selectedCourse === course.id && visible}
                    onDismiss={closeMenu}
                    anchor={
                      <TouchableOpacity onPress={() => openMenu(course.id)}>
                        <Feather name="more-horizontal" size={24} color="black" />
                      </TouchableOpacity>
                    }
                  >
                    <Menu.Item
                      onPress={() => console.log("Continue clicked")}
                      title="Continue"
                    />
                    <Divider />
                    <Menu.Item
                      onPress={() => console.log("Remove clicked")}
                      title="Remove"
                    />
                  </Menu>
                </View>
                <Text style={styles.ongoingCourseTeacher}>{course.teacher}</Text>
              </View>
              <View style={tw`flex-row justify-between mb-2`}>
                <Text>{course.lesson} lessons</Text>
                <Text>{course.progress}% complete</Text>
              </View>
              <ProgressBar progress={course.progress / 100} color="#000" />
            </View>
          </View>
        ))}
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FD",
    padding: 20,
    // paddingBottom:100
    // marginBottom:10
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "white",
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterButtonContainer: {
    flexDirection: "row",
  },
  filterButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
    height: 30,
  },
  filterText: {
    color: "#000",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featuredCourseCard: {
    width: 120,
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  featuredCourseTitle: {
    color: "#FFF",
    fontWeight: "bold",
  },
  featuredCourseLessons: {
    color: "#FFF",
    marginBottom: 10,
    fontSize: 12,
  },
  ongoingCourseCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems:'center'
    // marginBottom:10
  },
  ongoingCourseTitle: {
    fontWeight: "bold",
  },
  ongoingCourseTeacher: {
    color: "gray",
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { ongoingCourses } from "../data/OnGoingCourses";
import services from "../assets/services.jpg";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
// import Ionicons from '@expo/vector-icons'

const Library = () => (
  <ScrollView style={tw`p-4`}>
    <Text style={tw`text-lg font-bold`}>Library Page</Text>
    <View style={tw`p-3`}>
      {ongoingCourses.map((course) => (
        <View
          key={course.id}
          style={[
            tw`flex flex-row px-2 bg-white rounded-md mb-4 py-2`,
            { height: 120, gap: 10 },
          ]}
        >
          <Image
            source={services}
            style={[{ width: 100, height: 100 }, tw`rounded-md`]}
          />
          <View>
            <Text style={tw`text-sm font-bold mb-3`}>{course.title}</Text>
            <View style={[tw`flex-row mb-7`, { gap: 10 }]}>
              <View style={[tw`flex-row items-center`, {gap:4}]}>
                <Ionicons name="book-outline" size={16} color="orange"/>
              <Text style={[tw``, {fontSize:12}]}>{course.lesson} lessons</Text>
              </View>
              <View style={[tw`flex-row`, {gap:4}]}>
              <Ionicons name="book-outline" size={16} color="orange"/>
              <Text style={[tw``, {fontSize:12}]}>{course.minutes} minutes</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={[tw`underline`, {color:'orange', textAlign:'right'}]}>{course.progress>0?'Continue':'Begin'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        // <View
        //   key={course.id}
        //   style={[
        //     tw`bg-white rounded-md mb-4 p-3`,
        //     { width: 300, height: 200, elevation: 1 },
        //   ]}
        // >
        //   <Image
        //     source={services}
        //     style={[
        //       tw`rounded-md`,
        //       { width: 276, height: 100, objectFit: "cover" },
        //     ]}
        //   />
        //   <Text style={tw`text-lg font-bold`}>{course.title}</Text>
        //   <View>
        //     {/* <Ionicons name="person-outline"/> */}
        //     <Text>{course.teacher}</Text>
        //   </View>
        //   <View style={tw`flex-row justify-between items-center`}>
        //     <Text>{course.lesson} lessons</Text>
        //     <Text>{course.minutes} minutes</Text>
        //   </View>
        // </View>
      ))}
    </View>
  </ScrollView>
);

// const styles = StyleSheet.create({
//   container: {

//   },
// });
export default Library;

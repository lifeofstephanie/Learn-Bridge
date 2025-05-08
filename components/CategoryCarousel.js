import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { categories } from "../data/categories"; // Import categories

export default function CategoryCarousel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories.slice(0,20)} // Use imported categories
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            {/* <Image source={item.image} style={styles.image} /> */}
            <Text style={styles.categoryText} numberOfLines={1} >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // paddingHorizontal: ,
  },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
  categoryCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingVertical: 10,
    marginRight: 10,
    alignItems: "center",
    width: 100,
    // borderWidth:1
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color:'#A9A9A9'
  },
});

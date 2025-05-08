import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { pdfFiles } from "../data/pdfData"; // Import your PDF array
import { useNavigation } from "@react-navigation/native";
import { pdfFiles } from "../data/articles";

export const PdfList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <FlatList
        data={pdfFiles}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("PdfViewer", { pdfUri: item.uri })}>
                <View style={styles.pdfContainer} >
                    <Image source={require('../assets/Reading.png')} style={styles.pdfImage}/>
            <Text style={styles.text} numberOfLines={1}>{item.name}</Text></View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  text: { fontSize: 16, textAlign:'center' },
  pdfImage:{
    width:80,
    height:80,
    borderRadius:10
  },
  pdfContainer:{
    width:120,
    height:120,
    borderWidth:1,
    flexDirection:'column',
    // flex:1,
    // justifyContent:'center',
    alignItems:'center',
    // textAlign:'center',
    padding:10,
    borderRadius:15,
    borderColor:'#20B2AA'
  }
});



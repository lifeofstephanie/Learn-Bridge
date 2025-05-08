import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const PdfViewer = ({ route }) => {
  const { pdfUri } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={pdfUri} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  webview: { flex: 1 },
});

export default PdfViewer;

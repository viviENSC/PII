import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import React from "react";

export default function LoaderStackScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <Image
        style={styles.mainLogo4}
        source={require("../Services/Images/Logo-QuiEstCe-clas-remove.png")}
      />
      <ActivityIndicator style={styles.load} size="small" color="darkred" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  load: {
    flex: 1,
    transform: [{ scale: 5 }],
  },
  mainLogo4: {
    marginTop: 60,
    width: 250,
    height: 250,
  },
});

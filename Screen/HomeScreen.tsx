import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function HomeStackScreen({ navigation }: { navigation: any }) {
  const goToLoader = () => navigation.navigate("Loader");
  const goToConnexion = () => navigation.navigate("Connexion");
  const timeout = () => setTimeout(goToConnexion, 2500);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <Image
        style={styles.mainLogo1}
        source={require("../Services/Images/Logo-QuiEstCe-clas-remove.png")}
      />
      <TouchableOpacity onPress={goToLoader} onPressIn={timeout}>
        <Image
          style={styles.buttonPlay}
          source={require("../Services/Images/redButtonPlay-removebg-preview.png")}
        />
      </TouchableOpacity>
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
  mainLogo1: {
    marginTop: 100,
    width: 250,
    height: 250,
  },
  buttonPlay: {
    margin: 50,
    width: 150,
    height: 150,
  },
});

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

 
export default function VictoireStackScreen({navigation}:{navigation:any}) {
  const AppButton = ({ onPress, title }: { onPress: any; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer5}>
      <Text style={styles.appButtonText5}>{title}</Text>
    </TouchableOpacity>
  );
  const goToHome = () => navigation.navigate("ChoixJeu");
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
      <Image
        style={styles.logoVictoire}
        source={require("../Services/Images/Victoirev2-removebg.png")}
      />
      <AppButton onPress={goToHome} title={"Retour au menu"} />
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
    marginTop: 30,
    width: 150,
    height: 150,
  },
  logoVictoire: {
    width: 280,
    height: 280,
    //#B23B45
  },
  appButtonContainer5: {
    margin: 30,
    elevation: 20,
    // backgroundColor: "#B23B45",
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  appButtonText5: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

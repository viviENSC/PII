import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import setIsSignedIn from "..//Screen/InscriptionScreen";
import { auth } from "../Services/firebase";
import { signOut } from "firebase/auth";

export default function ChoixJeuStackScreen({
  navigation,
}: {
  navigation: any;
}) {
  const goToHome = () => navigation.navigate("Home");
  const goToJeu1vsO = () => navigation.navigate("JVSordi");
  const AppButton2 = ({ onPress, title }: { onPress: any; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer2}>
      <Text style={styles.appButtonText2}>{title}</Text>
    </TouchableOpacity>
  );
  const AppButton3 = ({ onPress, title }: { onPress: any; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer3}>
      <Text style={styles.appButtonText2}>{title}</Text>
    </TouchableOpacity>
  );
  const deco = () => {
    signOut(auth)
      .then((re) => {
        console.log(re);
        goToHome();
      })
      .catch((re) => {
        console.log(re);
      });
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <Image
        style={styles.mainLogo2}
        source={require("../Services/Images/Logo-QuiEstCe-clas-remove.png")}
      />
      <AppButton2 onPress={goToJeu1vsO} title={"Jouer contre l'ordinateur"} />
      <AppButton2 onPress title={"1 contre 1"} />
      <AppButton2 onPress title={"Mes statistiques"} />
      <AppButton3 onPress={deco} title={"Se déconnecter"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },

  mainLogo2: {
    marginTop: 50,
    width: 175,
    height: 175,
  },

  appButtonContainer2: {
    margin: 20,
    elevation: 8,
    borderWidth: 3,
    borderColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  appButtonText2: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  appButtonContainer3: {
    margin: 20,
    elevation: 8,
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
});

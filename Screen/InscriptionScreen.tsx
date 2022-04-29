import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { onChange } from "react-native-reanimated";
import { auth } from "../Services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function InscriptionStackScreen({
  navigation,
}: {
  navigation: any;
}) {
  const goToConnexion = () => {
    navigation.navigate("Connexion");
  };
  const goToChoixJeu = () => {
    navigation.navigate("ChoixJeu");
  };
  const AppButton = ({ onPress, title }: { onPress: any; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, mdp)
      .then((re) => {
        console.log(re);
        setIsSignedIn(true);
        goToChoixJeu();
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
      <View style={styles.bottomBarText}>
      <TextInput
        style={styles.textMail}
        placeholder="Adresse mail"
        placeholderTextColor={"lightgrey"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      </View>
      <View style={styles.bottomBarText}>
      <TextInput
        style={styles.textMdp}
        secureTextEntry
        placeholder="Mot de passe"
        placeholderTextColor={"lightgrey"}
        value={mdp}
        onChangeText={(text) => setMdp(text)}
      ></TextInput>
      </View>
      <Text style={styles.textCo}>(min. 6 caractères)</Text>
      <AppButton onPress={handleSignUp} title={"S'inscrire"} />
      <TouchableOpacity onPress={goToConnexion}>
        <Text style={styles.textCoX}>Se connecter</Text>
        <View style={styles.ligne}></View>
      </TouchableOpacity>
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
    marginTop: 30,
    width: 150,
    height: 150,
  },
  textIdentifiant: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
    color:'lightgrey',
  },
  textMdp: {
    fontSize: 22,
    margin: 15,
    textAlign: "center",
    color:'lightgrey',
  },
  appButtonContainer: {
    margin: 30,
    elevation: 7,
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 80,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textMail: {
    fontSize: 22,
    textAlign: "center",
    margin: 20,
  },
  textCo:{
    color:'lightgrey',
    fontSize:18,
    textAlign: "center",
  },
  textCoX: {
    color: "firebrick",
    fontSize: 18,
    fontWeight: "700",
    margin: 5,
  },
  ligne: {
    borderWidth: 1.5,
    borderColor: "firebrick",
    marginBottom: 80,
  },
  bottomBarText:{
    borderBottomColor: 'lightgrey', 
    borderBottomWidth: 1.5, 
    width:200,
  }
});

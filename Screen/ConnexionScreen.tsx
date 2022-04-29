import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { auth } from "../Services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function ConnexionStackScreen({
  navigation,
}: {
  navigation: any;
}) {
  const goToInscription = () => navigation.navigate("Inscription");
  const goToChoixJeu = () => navigation.navigate("ChoixJeu");
  const AppButton = ({ onPress, title }: { onPress: any; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  let erreur=false;
  let text='';
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, mdp)
      .then((re: any) => {
        console.log(re);
        setIsSignedIn(true);
        goToChoixJeu();
      })
      .catch((re: any) => {
        console.log(re);
        erreur=true;
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
        style={styles.textIdentifiant}
        placeholder="Adresse mail"
        placeholderTextColor={"lightgrey"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      </View>
      <View style={styles.bottomBarText}>
      <TextInput 
        style={styles.textMdp}
        placeholder="Mot de passe"
        placeholderTextColor={"lightgrey"}
        value={mdp}
        onChangeText={(text) => setMdp(text)}
      ></TextInput>
      {erreur ?(<Text style={styles.textErreur} >Adresse mail invalide ou mot de passe incorrect</Text>):null}
      </View>
      <AppButton onPress={handleSignIn} title={"Se connecter"} />
      <TouchableOpacity onPress={goToInscription}>
        <Text style={styles.textCo}>S'inscrire</Text>
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
    marginTop: 50,
    width: 175,
    height: 175,
  },
  textIdentifiant: {
    margin: 25,
    fontSize: 22,
    textAlign: "center", 
    color:'lightgrey', 
  },
  textMdp: {
    color:'lightgrey',
    margin:25,
    fontSize: 22,
    textAlign: "center",
  },
  appButtonContainer: {
    margin: 70,
    elevation: 8,
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textCo: {
    color: "firebrick",
    fontSize: 18,
    fontWeight: "700",
  },
  ligne: {
    borderBottomWidth: 2,
    borderBottomColor: "firebrick",
    marginBottom: 90,
  },
  bottomBarText:{
    borderBottomColor: 'lightgrey', 
    borderBottomWidth: 1.5, 
    width:200,
  },
  textErreur:{
    fontSize: 16,
    textAlign: "center",
    color:'red',
  }
});

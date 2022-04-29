import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function ReglesStackScreen({ navigation }: { navigation: any }) {
  const AppButton = ({ onPress, title }: { onPress: any; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer5}>
      <Text style={styles.appButtonText5}>{title}</Text>
    </TouchableOpacity>
  );
  const goBack = () => navigation.goBack();
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
      <Text style={styles.titleRegles}>
        LES REGLES DU JEU SONT LES SUIVANTES:
      </Text>
      <Text style={styles.regles}>
        -Seul le mode contre l'ordinateur est disponible pour l'instant. La
        suite est en cours de développement.
      </Text>
      <Text style={styles.regles}>
        -Le but du jeu est de deviner quel est le personnage que possède
        l'ordinateur.
      </Text>
      <Text style={styles.regles}>
        -Pour cela il y a deux possibilités. Soit en posant une question du type
        "Est-ce qu'il a:" suivit d'un attribut de personnage ou alors en faisant
        directement une suggestion du personnage que possède l'ordinateur.
      </Text>
      <Text style={styles.regles}>
        -Plusieurs objectifs secondaires peuvent être évalués au cours d'une
        partie pour la rendre plus éprouvante. Le but peut être de trouver en un
        minimum de coup ou encore le plus vite possible.
      </Text>
      <Text style={styles.regles}>
        -Certaines de ses variables seront mesurés dans une version futur pour
        permettre de faire la compétition avec ses amis.
      </Text>
      <Text style={styles.titleRegles}>-Bon jeu !!!</Text>
      <AppButton onPress={goBack} title={"Retour"} />
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
  titleRegles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  regles: {
    color: "white",
    fontSize: 14,
    textAlign: "justify",
    margin: 8,
  },
  appButtonContainer5: {
    margin: 30,
    elevation: 20,
    // backgroundColor: "#B23B45",
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  appButtonText5: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

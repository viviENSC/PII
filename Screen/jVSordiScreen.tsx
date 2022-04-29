import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import PersonneService, { Personne } from "../Services/Personne.service";
import PersonneItem from "../Components/Personne";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import PersonneList from "../Components/PersonneList";
interface PersonneListProps {
  personnes: Array<Personne>;
}

const DATA: Array<Personne> = [
  {
    nom: "Tud",
    img: "https://media.istockphoto.com/vectors/young-blond-man-face-avatar-positive-male-character-cartoon-vector-vector-id854036830",
    blond: true,
    brun: false,
    roux: false,
    lunettes: false,
    barbe: false,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Romain",
    img: "https://media.istockphoto.com/vectors/hipster-man-face-with-sunglasses-cartoon-character-vector-vector-id854033386?s=612x612",
    blond: false,
    brun: true,
    roux: false,
    lunettes: true,
    barbe: true,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Mathilde",
    img: "https://previews.123rf.com/images/vectorkif/vectorkif1710/vectorkif171000044/88252658-visage-d-une-femme-blonde-rire-%C3%A9motions-f%C3%A9minines-personnage-de-dessin-anim%C3%A9-attrayant-illustration-.jpg",
    blond: true,
    brun: false,
    roux: false,
    lunettes: false,
    barbe: false,
    sexeH: false,
    sexeF: true,
  },
  {
    nom: "Arthur",
    img: "https://media.istockphoto.com/vectors/young-bearded-man-face-positive-male-character-cartoon-vector-vector-id854033610?s=612x612",
    blond: true,
    brun: false,
    roux: false,
    lunettes: false,
    barbe: true,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Loic",
    img: "https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170411956/76771139-personnage-visage-t%C3%AAte-gar%C3%A7on-heureux-illustration-vectorielle.jpg",
    blond: false,
    brun: true,
    roux: false,
    lunettes: false,
    barbe: false,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Cleo",
    img: "https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170706703/81727858-visage-de-fille-heureuse-caract%C3%A8re-personnage-de-femme-jeune-illustration-vectorielle.jpg",
    blond: false,
    brun: true,
    roux: false,
    lunettes: false,
    barbe: false,
    sexeH: false,
    sexeF: true,
  },
  {
    nom: "Margaux",
    img: "https://previews.123rf.com/images/evgeniale10/evgeniale101303/evgeniale10130300008/18295662-visage-de-femme-belle-blonde-%C3%A0-lunettes.jpg",
    blond: true,
    brun: false,
    roux: false,
    lunettes: true,
    barbe: true,
    sexeH: false,
    sexeF: true,
  },
  {
    nom: "Max",
    img: "https://thumbs.dreamstime.com/b/avatar-d-affaires-de-bande-dessin%C3%A9e-vecteur-jeune-homme-cheveux-blonds-en-costume-et-verres-132341708.jpg",
    blond: true,
    brun: false,
    roux: false,
    lunettes: true,
    barbe: false,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Leo",
    img: "https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170904831/85135089-jeune-homme-t%C3%AAte-avec-lunettes-de-soleil-avatar-personnage-illustration-vectorielle-design.jpg?fj=1",
    blond: false,
    brun: true,
    roux: false,
    lunettes: true,
    barbe: false,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Zoe",
    img: "https://c8.alamy.com/compfr/mtnj5y/face-a-l-expression-de-belle-femme-brune-a-lunettes-et-blouse-rouge-les-emotions-personnage-a-surpris-vector-illustration-isole-sur-blanc-mtnj5y.jpg",
    blond: false,
    brun: true,
    roux: false,
    lunettes: true,
    barbe: false,
    sexeH: false,
    sexeF: true,
  },
  {
    nom: "Simon",
    img: "https://media.istockphoto.com/vectors/bald-man-head-brutal-male-bearded-face-cartoon-character-vector-vector-id854033760?s=612x612",
    blond: false,
    brun: false,
    roux: false,
    lunettes: false,
    barbe: true,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Antoine",
    img: "https://media.istockphoto.com/vectors/redhaired-and-bearded-man-with-glasses-people-flat-avatars-vector-vector-id1185411442",
    blond: false,
    brun: false,
    roux: true,
    lunettes: true,
    barbe: true,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Yoan",
    img: "data:image/jpeg;base64,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",
    blond: false,
    brun: false,
    roux: false,
    lunettes: true,
    barbe: true,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Hugo",
    img: "https://media.istockphoto.com/vectors/mature-balding-man-face-avatar-positive-male-character-cartoon-vector-vector-id854034332?s=612x612",
    blond: false,
    brun: false,
    roux: false,
    lunettes: false,
    barbe: false,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Thibaut",
    img: "https://previews.123rf.com/images/andegro4ka/andegro4ka1702/andegro4ka170200007/71587870-portrait-d-homme-aux-cheveux-roux-isol%C3%A9-illustration-vecteur-de-dessin-anim%C3%A9.jpg",
    blond: false,
    brun: false,
    roux: true,
    lunettes: false,
    barbe: false,
    sexeH: true,
    sexeF: false,
  },
  {
    nom: "Leonore",
    img: "data:image/webp;base64,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",
    blond: false,
    brun: false,
    roux: false,
    lunettes: true,
    barbe: false,
    sexeH: false,
    sexeF: true,
  },
];
const AppButtonAbandon = ({
  onPress,
  title,
  img,
}: {
  onPress: any;
  title: string;
  img: string;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainerAbandon}>
    <Image style={styles.flag} source={{ uri: img }} />
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const AppButtonPropose = ({
  onPress,
  title,
}: {
  onPress: any;
  title: string;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainerPropose}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const AppButtonProposeAttribut = ({
  onPress,
  title,
}: {
  onPress: any;
  title: string;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.appButtonContainerProposeAttribut}
  >
    <Text style={styles.appButtonTextAttribut}>{title}</Text>
  </TouchableOpacity>
);
const AppButtonRegles = ({
  onPress,
  title,
}: {
  onPress: any;
  title: string;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainerRegles}>
    <Text style={styles.appButtonTextRegles}>{title}</Text>
  </TouchableOpacity>
);
const nbMystere = Math.floor(Math.random() * 17);
const PersMystere = DATA[nbMystere].nom;

export default function JVSordiScreen({ navigation }: { navigation: any }) {
  const goToVictoire = () => {
    navigation.navigate("Victoire");
  };
  const goToDefaite = () => {
    navigation.navigate("Defaite");
  };
  const goToRegles = () => {
    navigation.navigate("Regles");
  };
  const [DATAlist, SetDATAlist] = useState(DATA);
  const [attribut, setAttribut] = useState("");
  const [nomATrouver, setnomATrouver] = useState("");
  const loadPersonnes = () => {
    // Load all modules
    PersonneService.getAll().then((personnes) => {
      SetDATAlist(personnes);
    });
  };
  const removePersonneByNom = (nom: string) => {
    PersonneService.removeByNom(nom);
    loadPersonnes();
  };
  const removePersonneByAttribut = (
    attribut: string,
    valueAttribut: boolean
  ) => {
    PersonneService.removeByAttribut(attribut, valueAttribut);
    loadPersonnes();
    console.log(nbMystere);
    console.log(PersMystere);
    console.log(DATA[nbMystere].blond);
    console.log(DATA[nbMystere].brun);
    console.log(DATA[nbMystere].roux);
    console.log(DATA[nbMystere].lunettes);
    console.log(attribut);
    // console.log(DATAlist[nbMystere]);
    // console.log(DATAlist);
  };
  const PartieNom = () => {
    if (nomATrouver == PersMystere) {
      setnomATrouver("");
      goToVictoire();
    } else {
      removePersonneByNom(nomATrouver);
      setnomATrouver("");
      console.log(nbMystere);
      console.log(PersMystere);
      console.log(nomATrouver);
      // console.log(DATA[nbMystere]);
      // console.log(DATAlist);
    }
  };
  const PartieAttribut = () => {
    if (attribut == "blond") {
      removePersonneByAttribut(attribut, DATA[nbMystere].blond);
    } else if (attribut == "brun") {
      removePersonneByAttribut(attribut, DATA[nbMystere].brun);
    } else if (attribut == "roux") {
      removePersonneByAttribut(attribut, DATA[nbMystere].roux);
    } else if (attribut == "lunettes") {
      removePersonneByAttribut(attribut, DATA[nbMystere].lunettes);
    } else if (attribut == "barbe") {
      removePersonneByAttribut(attribut, DATA[nbMystere].barbe);
    } else if (attribut == "sexeH") {
      removePersonneByAttribut(attribut, DATA[nbMystere].sexeH);
    } else if (attribut == "sexeF") {
      removePersonneByAttribut(attribut, DATA[nbMystere].sexeF);
    }
  };

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
      <View style={styles.list}>
        <PersonneList personnes={DATAlist} />
      </View>
      <View style={styles.propositions}>
        <Text style={styles.textePropositions}>"Est-ce-qu'il a : " </Text>
        <RNPickerSelect
          placeholder={{ label: "?" }}
          onValueChange={(value) => setAttribut(value)}
          items={[
            { label: "Des cheveux blonds ?", value: "blond" },
            { label: "Des cheveux bruns ?", value: "brun" },
            { label: "Des cheveux roux ?", value: "roux" },
            { label: "Des lunnettes ?", value: "lunettes" },
            { label: "De la barbe ?", value: "barbe" },
            { label: "Des traits féminin ?", value: "sexeF" },
            { label: "Des traits masculin ?", value: "sexeH" },
          ]}
          style={pickerSelectStyles}
        />
        <Image
          style={styles.arrow}
          source={{
            uri: "https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png",
          }}
        />
      </View>
      <View style={styles.buttonAttribut}>
        <AppButtonProposeAttribut onPress={PartieAttribut} title={"Valider"} />
      </View>
      <View style={styles.containerValid1}>
        <View style={styles.containerValid2}>
          <Text style={styles.textPropose}>Faire une proposition:</Text>
          <TextInput
            style={styles.textInputPropose}
            placeholder="Nom du personnage"
            placeholderTextColor={"grey"}
            value={nomATrouver}
            onChangeText={(text) => setnomATrouver(text)}
          ></TextInput>
          {}
          <View style={styles.bottomBarText}></View>
          <AppButtonPropose onPress={PartieNom} title={"Valider"} />
        </View>
        <View style={styles.containerAbandon}>
          <AppButtonRegles onPress={goToRegles} title={"Rappel des règles"} />
          <AppButtonAbandon
            onPress={goToDefaite}
            title={"Abandonner"}
            img={"https://img.icons8.com/ios/344/flag--v1.png"}
          />
        </View>
      </View>
    </View>
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "white",
    textDecorationColor: "white",
    paddingRight: 30, // to ensure the text is never behind the icon
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
  inputAndroid: {
    color: "white",
    paddingRight: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5, // to ensure the text is never behind the icon
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  propositions: {
    //backgroundColor:'yellow',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding:15,
  },
  buttonAttribut: {
    alignItems: "center",
  },
  textePropositions: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  appButtonTextRegles: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  appButtonContainerRegles: {
    borderColor: "firebrick",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    margin: 5,
  },
  bottomBarText: {
    borderBottomColor: "grey",
    borderBottomWidth: 1.5,
    width: 150,
  },
  list: {
    flex: 1,
    //backgroundColor: "green",
    // borderColor: "black",
    // borderWidth: 1.2,
  },
  mainLogo1: {
    marginTop: 8,
    width: 90,
    height: 90,
    alignSelf: "center",
  },
  appButtonContainerAbandon: {
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  flag: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  arrow: {
    width: 15,
    height: 15,
    tintColor: "white",
  },
  containerAbandon: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    marginBottom: 15,
    marginRight: 15,
    margin: 5,
  },
  appButtonContainerPropose: {
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    margin: 5,
  },
  appButtonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    margin: 3,
  },
  appButtonContainerProposeAttribut: {
    backgroundColor: "firebrick",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    width: 150,
    //margin: 5,
  },
  appButtonTextAttribut: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    margin: 3,
  },
  appButtonTextAbandon: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  containerValid1: {
    //backgroundColor:'yellow',
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  containerValid2: {
    //backgroundColor:'pink',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 5,
  },
  textPropose: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  textInputPropose: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 17,
    margin: 3,
  },
});

import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { Personne } from "../Services/Personne.service";

interface PersonneItemProps {
  personne: Personne;
}
export default class PersonneItem extends Component<PersonneItemProps, {}> {
  render() {
    return (
      <View style={styles.personneStyle}>
        <TouchableOpacity>
          {/* <Image style={styles.imgPersonne} source={require(this.props.personne.img)} /> */}
          <Image
            style={styles.imgPersonne}
            source={{ uri: this.props.personne.img }}
          />
          <Text style={styles.backgroundText}>{this.props.personne.nom}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  personneStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  imgPersonne: {
    height: 70,
    width: 70,
  },
});

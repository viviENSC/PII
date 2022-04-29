import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, FlatList } from "react-native";
import { Image } from "react-native";
import { Personne } from "../Services/Personne.service";
import PersonneItem from "./Personne";

interface PersonneListProps {
  personnes: Array<Personne>;
}

export default class PersonneList extends Component<PersonneListProps, {}> {
    render() {
        const renderItem = ({ item }: { item: Personne }) => (
            <PersonneItem personne={item} />
          );
      return (
        <FlatList<Personne>
        style={styles.list}
        data={this.props.personnes}
        numColumns={4}
        keyExtractor={(item: { nom: any; }) => item.nom}
        renderItem={renderItem}
      />
      );
    }
  }
  const styles = StyleSheet.create({
    list: {
        flex: 1,
      },
  });
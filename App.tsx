import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChoixJeuStackScreen from "./Screen/ChoixJeuScreen";
import HomeStackScreen from "./Screen/HomeScreen";
import LoaderStackScreen from "./Screen/Loader";
import ConnexionStackScreen from "./Screen/ConnexionScreen";
import VictoireStackScreen from "./Screen/VictoireScreen";
import DefaiteStackScreen from "./Screen/DefaiteScreen";
import InscriptionStackScreen from "./Screen/InscriptionScreen";
import JVSordiScreen from "./Screen/jVSordiScreen";
import ReglesStackScreen from "./Screen/ReglesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeStackScreen} />
        <Stack.Screen name="Loader" component={LoaderStackScreen} />
        <Stack.Screen name="Connexion" component={ConnexionStackScreen} />
        <Stack.Screen name="ChoixJeu" component={ChoixJeuStackScreen} />
        <Stack.Screen name="Victoire" component={VictoireStackScreen} />
        <Stack.Screen name="Defaite" component={DefaiteStackScreen} />
        <Stack.Screen name="Inscription" component={InscriptionStackScreen} />
        <Stack.Screen name="JVSordi" component={JVSordiScreen} />
        <Stack.Screen name="Regles" component={ReglesStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
});

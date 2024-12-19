import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title: "Conecta Mundo",
    imageUrl: require("../assets/images/iconeapp_conectamundo.png"),
    screen: "LoadingScreenConectaMundo",
  },
  {
    id: 2,
    title: "Conecta Mundo Brasil",
    imageUrl: require("../assets/images/iconeapp_conectamundobrasil.png"),
    screen: "LoadingScreenConectaMundoBrasil",
  }
];

export function AppsNavigate() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpeg")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card]}
            onPress={() => handleCardPress(item.screen)}
          >
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
    marginBottom: 15,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AppsNavigate;

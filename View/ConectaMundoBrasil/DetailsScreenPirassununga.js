import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

export function DetailsScreenPirassununga({ navigation }) {
  const handleImagePress = (imageName) => {
    let screenName = "";

    // Definindo a tela de destino com base no nome da imagem
    switch (imageName) {
      case "imagem1":
        screenName = "EmasTourism";
        break;
      case "imagem2":
        screenName = "PracaTourism";
        break;
      case "imagem3":
        screenName = "SantuarioTourism";
        break;
      case "imagem4":
        screenName = "CidadeTourism";
        break;
      case "imagem5":
        screenName = "TherenceTourism";
        break;
      default:
        screenName = "TourismDetailsScreen";
        break;
    }

    navigation.navigate(screenName);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pontos Turísticos</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => handleImagePress("imagem1")}>
              <Image
                source={require("../../assets/images/galeria/emas/emas3.jpg")}
                style={[
                  styles.image,
                  styles.imageWithBorder,
                  { marginHorizontal: Dimensions.get("window").width * 0.020 },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.imageRow,
              { marginTop: -Dimensions.get("window").height * 0.008 },
            ]}
          >
            <TouchableOpacity onPress={() => handleImagePress("imagem2")}>
              <Image
                source={require("../../assets/images/galeria/praca/praca2.jpg")}
                style={[
                  styles.image,
                  styles.imageWithBorder,
                  { marginHorizontal: Dimensions.get("window").width * 0.01 },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress("imagem3")}>
              <Image
                source={require("../../assets/images/galeria/santuario/santuario5.jpg")}
                style={[
                  styles.image,
                  styles.imageWithBorder,
                  { marginHorizontal: Dimensions.get("window").width * 0.01 },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress("imagem4")}>
              <Image
                source={require("../../assets/images/galeria/cidade/cidade4.jpg")}
                style={[
                  styles.image,
                  styles.imageWithBorder,
                  { marginHorizontal: Dimensions.get("window").width * 0.01 },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => handleImagePress("imagem5")}>
              <Image
                source={require("../../assets/images/galeria/therence/therense8.jpg")}
                style={[
                  styles.image,
                  styles.imageWithBorder,
                  { marginHorizontal: Dimensions.get("window").width * 0.020 },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height * 0.03,
    paddingBottom: Dimensions.get("window").height * 0.15,
  },
  title: {
    fontSize: 33,
    textAlign: "center",
    color: "white",
    marginBottom: Dimensions.get("window").height * 0.04,
    textShadowColor: "rgba(55, 14, 67, 1)",
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    fontWeight: "100",
    marginTop: Dimensions.get("window").height * 0.02,
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height * 0.05,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height * 0.03,
  },
  image: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.15,
    borderRadius: 80,
  },
  imageWithBorder: {
    borderWidth: 3, 
    borderColor: "white", 
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.08,
    width: "80%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20,
  },
  firstButton: {
    borderColor: "white",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.1,
    width: "30%",
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.1,
    width: "46%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  secondButtonText: {
    color: "#370e43",
  },
});

export default DetailsScreenPirassununga;

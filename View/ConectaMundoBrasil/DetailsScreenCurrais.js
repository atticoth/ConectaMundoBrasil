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

export default function DetailsScreenCurrais({ navigation }) {
  const W = Dimensions.get("window").width;
  const H = Dimensions.get("window").height;

  const handleImagePress = (imageName) => {
    let screenName = "EmDesenvolvimento";

    switch (imageName) {
      case "imagem1":
        screenName = "ArcoDaPedraTourism";
        break;
      // case "imagem2":
      //   screenName = "BaixaoDoCaldeiraoTourism";
      //   break;
      // case "imagem3":
      //   screenName = "PassagemMolhadaParaTourism";
      //   break;
      case "imagem2":
        screenName = "NossaSenhoraAparecidaDaLuzTourism";
        break;
      case "imagem3":
        screenName = "BomJesusDaLapaTourism";
        break;
      case "imagem4":
        screenName = "PacificoCavalcanteTourism";
        break;
      default:
        screenName = "EmDesenvolvimento";
        break;
    }

    navigation.navigate(screenName);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pontos Turísticos</Text>

        <View style={styles.imageContainer}>
          {/* Linha 1 */}
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => handleImagePress("imagem1")}>
              <Image
                source={require("../../assets/images/galeria/currais/arco_foto1.jpg")}
                style={[styles.image, styles.imageWithBorder]}
                resizeMode="cover"
              />
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => handleImagePress("imagem2")}>
              <Image
                source={require("../assets/images/arco_foto2.jpg")}
                style={[styles.image, styles.imageWithBorder]}
                resizeMode="cover"
              />
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => handleImagePress("imagem2")}>
              <Image
                source={require("../../assets/images/galeria/currais/nossa_senhora_da_luz.jpg")}
                style={[styles.image, styles.imageWithBorder]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>

          {/* Linha 2 */}
          <View style={styles.imageRow}>
            {/* <TouchableOpacity onPress={() => handleImagePress("imagem3")}>
              <Image
                source={require("../assets/images/pracadagloria.jpg")}
                style={[styles.image, styles.imageWithBorder]}
                resizeMode="cover"
              />
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => handleImagePress("imagem3")}>
              <Image
                source={require("../../assets/images/galeria/currais/padroeiro_bom_jesus.jpg")}
                style={[styles.image, styles.imageWithBorder]}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleImagePress("imagem4")}>
              <Image
                source={require("../../assets/images/galeria/currais/pacifico_cavalcante_1.jpeg")}
                style={[styles.image, styles.imageWithBorder]}
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
    width: "100%",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: Dimensions.get("window").height * 0.03,
    width: "100%",
  },
  image: {
    width: Dimensions.get("window").width * 0.35,
    height: Dimensions.get("window").height * 0.18,
    borderRadius: 80,
  },
  imageWithBorder: {
    borderWidth: 3,
    borderColor: "white",
  },
});

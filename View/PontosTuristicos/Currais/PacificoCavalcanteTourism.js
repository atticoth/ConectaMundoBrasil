import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";

export default function PacificoCavalcanteTourism({ navigation }) {
  const W = Dimensions.get("window").width;
  const H = Dimensions.get("window").height;
  const P = W * 0.10; 

  return (
    <ImageBackground
      source={require("../../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: H * 0.02 }}>
          <View style={[styles.content, { alignItems: "stretch" }]}>
            <Text style={[styles.title, { marginLeft: P, marginRight: P }]}>
              Pacífico Cavalcante
            </Text>

            <View style={styles.imageContainer}>
              <Image
                source={require("../../../assets/images/galeria/currais/pacifico_cavalcante_1.jpeg")}
                style={[styles.imageLarge, { marginBottom: H * 0.03 }]}
                resizeMode="cover"
              />
            </View>

            <Text style={[styles.paragraph, { marginLeft: P, marginRight: P }]}>
              Localizado a aproximadamente 60 km da sede de Currais-PI, o Pacífico
              Cavalcante desponta como um futuro e poderoso ponto turístico do município.
              O atrativo é formado por uma imponente pedra que, em sua superfície,
              apresenta uma espécie de salão natural, oferecendo uma vista deslumbrante
              para o horizonte.
            </Text>

            <Text style={[styles.paragraph, { marginLeft: P, marginRight: P }]}>
              Em um de seus lados, a pedra atinge cerca de 10 metros de altura, enquanto
              o outro chega a impressionantes 100 metros, revelando panoramas que alcançam
              comunidades vizinhas e formações rochosas próximas. O local deverá receber,
              em breve, a instalação da imagem de São Pedro, padroeiro da região, tornando-se
              ainda mais simbólico e especial.
            </Text>

            <Text style={[styles.paragraph, { marginLeft: P, marginRight: P }]}>
              O trajeto até o atrativo proporciona uma verdadeira imersão no Cerrado piauiense,
              com cenários de tirar o fôlego: plantações de grãos, formações rochosas e a
              biodiversidade típica da região. Uma experiência que combina aventura, adrenalina
              e contemplação. Sem dúvida, o Pacífico Cavalcante tem tudo para se tornar um dos
              atrativos mais visitados e admirados de Currais-PI.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={() => navigation.navigate("AtracoesCurrais")}
            >
              <Text style={styles.buttonText}>Atrações</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.secondButton]}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/search/?api=1&query=Pac%C3%ADfico%20Cavalcante%2C%20Currais%20-%20PI"
                )
              }
            >
              <Text style={[styles.buttonText, styles.secondButtonText]}>
                Localização
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
  content: {
    justifyContent: "flex-start",
    paddingTop: Dimensions.get("window").height * 0.01,
    paddingBottom: Dimensions.get("window").height * 0.01,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    fontWeight: "100",
    textShadowColor: "rgba(55, 14, 67, 1)",
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
  },
  paragraph: {
    fontSize: 14,
    textAlign: "justify",
    color: "white",
    marginBottom: Dimensions.get("window").height * 0.03,
  },
  imageContainer: { width: "100%", alignItems: "center" },
  imageLarge: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.36,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Dimensions.get("window").height * 0.02,
  },
  bulletIcon: { fontSize: 16, lineHeight: 22, marginRight: 8, color: "white" },
  bulletText: {
    flex: 1,
    color: "white",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
  },
  bulletStrong: { fontWeight: "600" },
  buttonContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.04,
    marginLeft: "auto",
    marginRight: "auto",
    marginHorizontal: 10,
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
    width: Dimensions.get("window").width * 0.31,
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.45,
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "white" },
  secondButtonText: { color: "#370e43" },
});

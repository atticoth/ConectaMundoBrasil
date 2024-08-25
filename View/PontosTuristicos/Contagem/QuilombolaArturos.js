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

export function QuilomboArturosTourism({ navigation }) {
  return (
    <ImageBackground
      source={require("../../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Comunidade Quilombola Arturos</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../assets/images/galeria/quilomboarturos/quilomboarturos5.jpg")}
                style={styles.imageLarge}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.description}>
              A Comunidade Quilombola dos Arturos, criada no século 19 e um dos
              mais importantes símbolos de resistência da cultura negra em Minas
              Gerais, reúne atualmente cerca de 500 descendentes e agregados do
              casal Arthur Camilo Silvério (filho de escravos) e Carmelinda
              Maria da Silva, em uma propriedade rural localizada na cidade de
              Contagem, no entorno da capital do estado de Minas Gerais. Ao
              longo do ano acontecem várias manifestações culturais e religiosas
              afro-brasileiras no espaço, todas ligadas ao Congado. Para a
              musicóloga Glaura Lucas, os rituais que ali acontecem são
              considerados performances graças a aspectos como os cantos
              entoados, o ritmo gerado pelas batidas dos tambores e o movimento
              corporal dos congadeiros. A comunidade é uma das mais tradicionais
              e importantes do estado. Os Arturos são os responsáveis por
              diversas celebrações do município, como a Festa da Abolição e a
              Festa de Nossa Senhora do Rosário.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={() => navigation.navigate("AtracoesContagem")}
            >
              <Text style={styles.buttonText}>Atrações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondButton]}
              onPress={() =>
                Linking.openURL("https://maps.app.goo.gl/FhF7oVMzKx1isGfe8")
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
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
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
    marginLeft: Dimensions.get("window").width * 0.1,
    marginRight: Dimensions.get("window").width * 0.1,
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
    color: "white",
    marginBottom: Dimensions.get("window").height * 0.03,
    marginLeft: Dimensions.get("window").width * 0.1,
    marginRight: Dimensions.get("window").width * 0.1,
  },
  imageLarge: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.36,
    marginBottom: Dimensions.get("window").height * 0.03,
  },
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
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  secondButtonText: {
    color: "#370e43",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Dimensions.get("window").height * 0.02,
    paddingHorizontal: Dimensions.get("window").width * 0.1,
  },
  imageSmall: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").height * 0.15,
    marginBottom: Dimensions.get("window").height * 0.01,
  },
});

export default QuilomboArturosTourism;

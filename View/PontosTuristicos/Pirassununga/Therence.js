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

export function TherenceTourism({ navigation }) {
  return (
    <ImageBackground
      source={require("../../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Museu da Cachaça</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../assets/images/galeria/therence/therense8.jpg")}
                style={styles.imageLarge}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.description}>
            O Museu da Cachaça abriga a maior coleção de cachaças do Brasil, com mais de 3.000 exemplares, e é um verdadeiro patrimônio da cultura e história brasileira. 
            </Text>
            <Text style={styles.description}>
            O espaço também conta com um antigo alambique de produção artesanal e várias máquinas de época, proporcionando aos visitantes um mergulho na história da produção de cachaça e suas curiosidades. 
            </Text>
            <Text style={styles.description}>
            Além do acervo, o museu oferece degustações e a possibilidade de compra de bebidas variadas e guloseimas da renomada Adega Therense, sob a administração de Robert.
            </Text>
            <Text style={styles.description}>
            Horário de funcionamento: de segunda a sexta-feira, das 8h00 às 18h00, e aos sábados, domingos e feriados, das 8h00 às 12h30.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={() => navigation.navigate("AtracoesPirassununga")}
            >
              <Text style={styles.buttonText}>Atrações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondButton]}
              onPress={() =>
                Linking.openURL(
                  "https://maps.app.goo.gl/g1pnbhYRyacd2atU7"
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

export default TherenceTourism;

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
} from "react-native";

export function DetalhesCurrais({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Currais - PI</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/currais_cidade.jpg")}
              style={styles.imageLarge}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
            Localizado no sul do Piauí, o município de Currais encanta por suas
            paisagens naturais, riquezas culturais e hospitalidade interiorana.
            Com forte vocação para o ecoturismo e o turismo rural, a cidade
            oferece aos visitantes experiências únicas em meio a formações
            rochosas, mirantes, trilhas e rios de águas cristalinas. Seja para
            aventura, contemplação ou descanso, Currais é um destino
            surpreendente para quem deseja se conectar com a natureza e
            vivenciar o sertão de forma autêntica.
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
            onPress={() => navigation.navigate("DetailsScreenCurrais")}
          >
            <Text style={[styles.buttonText, styles.secondButtonText]}>
              Pontos Turísticos
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
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
    width: "100%",
  },
  sectionTitle: {
    width: "100%",
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  photosLabel: {
    width: "100%",
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 8,
    paddingHorizontal: 10,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  subscription: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  bullet: {
    fontSize: 15,
    color: "white",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 6,
  },

  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 14,
  },
  imageLarge: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height * 0.28,
    borderRadius: 6,
  },

  photoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  photo: {
    width: "48%",
    aspectRatio: 3 / 4, 
    borderRadius: 6,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginTop: 8,
    marginBottom: 12,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    height: 50,
    width: Dimensions.get("window").width * 0.4,
  },
  firstButton: {
    borderColor: "white",
    borderWidth: 1,
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  secondButtonText: {
    color: "#370e43",
  },
});

export default DetalhesCurrais;

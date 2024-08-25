import * as React from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

export function EmDesenvolvimento({ navigation }) {

  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/exclamacao.png")} // Ícone central
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.message}>Em Desenvolvimento</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("InitialScreen")}
        >
          <Text style={styles.buttonText}>Tela Inicial</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: Dimensions.get("window").width * 20, // Ajuste o tamanho do ícone conforme necessário
    height: Dimensions.get("window").height * 0.25,
    marginBottom: 30,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002882",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#370e43",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EmDesenvolvimento;

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
import { LinearGradient } from "expo-linear-gradient";

export function DetalhesContagem({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpeg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Contagem</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/pracadagloria.jpg")}
              style={styles.imageLarge}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.description}>
            Contagem faz parte da Região Metropolitana de Belo Horizonte. É um
            dos mais importantes municípios do Estado de Minas Gerais. É a
            terceira maior população de Minas Gerais com 603.442 mil habitantes
            (IBGE/2010). Pertence ao Vetor Oeste: Contagem, Betim e região do
            Barreiro. 3ª maior economia de Minas Gerais. 25ª maior economia do
            Brasil. Possui seis grandes distritos industriais: Cinco; Cincão;
            Cinquinho; Cidade Industrial Juventino Dias; Jardim Industrial e
            Polo Moveleiro da Ressaca. É o segundo mercado de trabalho de Minas
            Gerais: mais de 200 mil pessoas empregadas. PIB:{" "}
          </Text>
          <Text style={styles.description}>HISTÓRIA DE CONTAGEM/MG</Text>
          <Text style={styles.description}>
            ARRAIAL DE SÃO GONÇALO DA CONTAGEM DAS ABÓBORAS
          </Text>
          <Text style={styles.subscription}>
            Em 1716, o Brasil era colônia de Portugal. A coroa portuguesa
            instalava postos de registros em várias cidades brasileiras para
            fiscalização e arrecadação de impostos.
          </Text>
          <Text style={styles.subscription}>
            Um posto de registro foi instalado na Região das Abóboras.
          </Text>
          <Text style={styles.subscription}>
            Em torno dela, surgiu o povoado “Arraial de São Gonçalo da Contagem
            das Abóboras".
          </Text>
          <Text style={styles.subscription}>
            O nome Contagem faz referência à contagem das cabeças de gado, de
            escravos e mercadorias que eram taxadas no posto de fiscalização.
          </Text>
          <Text style={styles.subscription}>
            Em 30 de agosto de 1911, Contagem foi transformada em município. Com
            a expansão Industrial no Brasil, a cidade foi escolhida para ser um
            polo industrial do Estado. Na década de 40, foram criados a Cidade
            Industrial Juventino Dias e o Centro Industrial de Contagem (Cinco).
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
            onPress={() => navigation.navigate("DetailsScreenContagem")}
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
  backgroundGradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20, // Adiciona espaçamento ao redor do conteúdo
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
  imageLarge: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height * 0.3,
    marginBottom: 20,
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
  },
  firstButton: {
    borderColor: "white",
    borderWidth: 1,
    height: 50,
    width: Dimensions.get("window").width * 0.4,
  },
  secondButton: {
    backgroundColor: "white",
    borderColor: "#370e43",
    borderWidth: 1,
    height: 50,
    width: Dimensions.get("window").width * 0.4,
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

export default DetalhesContagem;
